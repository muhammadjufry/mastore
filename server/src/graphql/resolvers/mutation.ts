import db from "../../database/database";
import { redisClient } from "../../index";
import bcrypt from "bcrypt";
import crypto from "crypto";
import SendEmail from "../../utils/sendEmail";
import { error } from "console";
const mutationResolvers = {
  createUser: async (args: any) => {
    try {
      const {
        name,
        username,
        email,
        password,
        confirmPassword,
        cartId,
        orderId,
        phoneNumber,
        address,
        following,
        follower,
        userTokenLogin,
      } = args.input;
      if (password !== confirmPassword) {
        return "Please write match password!";
      }

      console.log(
        name,
        username,
        email,
        password,
        confirmPassword,
        cartId,
        orderId,
        phoneNumber,
        address,
        following,
        follower,
        userTokenLogin
      );

      const existingEmailUser = await db("users")
        .select("email")
        .where("email", email);
      if (existingEmailUser.length !== 0) {
        throw "User with provide email already registered";
      }

      const existingUsernameUser = await db("users")
        .select("username")
        .where("username", username);
      if (existingUsernameUser.length !== 0) {
        throw "User with provide username already registered";
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      console.log(password, hashedPassword);
      const verficationCode = crypto.randomBytes(6).toString("base64");
      const user: any = await db("users")
        .insert({
          name,
          username,
          email,
          password,
          confirmPassword,
          cartId,
          orderId,
          phoneNumber,
          address,
          following,
          follower,
          verficationCode,
          userTokenLogin: crypto.randomBytes(64).toString("hex"),
        })
        .returning("*");
      console.log(user);
      SendEmail({
        sendEmailTo: email,
        subject: `MASTORE | YOUR VERIFICATION CODE IS ${verficationCode}`,
        message: `<h2>Thank you for registering at MA STORE</h2> <p>Click this <a href="http://localhost:8080/api/v1/user/verify/${verficationCode}">link</a> to verify your email </p> <p>If this email is not you please ignore this email, Thank you</p> <p>Best wishes <br /> <b>MA STORE</b></p>`,
      });
      return user[0];
    } catch (error) {
      console.log(error);
    }
  },
  userLogin: async (args: any) => {
    try {
      const { email, password, confirmPassword } = args;
      if (password !== confirmPassword) {
        throw "Please write match password!";
      }
      const user: any = await db("users").where({ email }).first();
      if (!user) {
        throw "Invalid email or password";
      }
      console.log(user);
      if (user["verificationCode"] !== "verified") {
        throw "Your account is not verified yet";
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        throw "Invalid email or password";
      }
      return user;
    } catch (error) {
      console.log(error);
    }
  },
  editUser: async (args: any) => {
    try {
      const { id } = args;
      const {
        name,
        username,
        email,
        password,
        confirmPassword,
        cartId,
        orderId,
        phoneNumber,
        address,
      } = args.input;
      const updateUser = await db("users")
        .where({ id, password, email })
        .update({
          name,
          username,
          email,
          password,
          confirmPassword,
          cartId,
          orderId,
          phoneNumber,
          address,
        });

      if (!updateUser) {
        throw "User not found";
      }

      return updateUser;
    } catch (error) {
      console.log(error);
    }
  },
  verifyUserOrSeller: async (args: any) => {
    try {
      const { verificationCode } = args;
      const user = await db("users")
        .where("verficationCode", "=", verificationCode)
        .first();
      if (user) {
        await db("users")
          .where("id", "=", user.id)
          .update({ verficationCode: "verified" });
        throw "Your account has been verified!";
      } else {
        return user;
      }
    } catch (error) {
      console.log(error);
    }
  },
  deleteUser: async (args: any) => {
    try {
      const { id, username, email } = args;
      if (!(await db("users").where({ id, username, email }))) {
        return "User not found";
      }
      await db("users").where({ id, username, email }).del();
      return "User successfully deleted!";
    } catch (error) {
      console.log(error);
    }
  },
  createProduct: async (args: any) => {
    try {
      const {
        image,
        name,
        price,
        variants,
        description,
        stock,
        productSeller,
        productSource,
        sold,
        star5,
        star4,
        star3,
        star2,
        star1,
        sellerId,
        userRatingId,
      } = args.input;
      const product = await db("products")
        .insert({
          image,
          name,
          price,
          variants,
          description,
          stock,
          productSeller,
          productSource,
          sold,
          star5,
          star4,
          star3,
          star2,
          star1,
          sellerId,
          userRatingId,
        })
        .returning("*");
      return { message: "Successfully create your product", data: product };
    } catch (error) {
      console.log(error);
    }
  },
  editProduct: async (args: any) => {
    try {
      const { id } = args;
      const {
        image,
        name,
        price,
        variants,
        description,
        stock,
        productSeller,
        productSource,
        sold,
        star5,
        star4,
        star3,
        star2,
        star1,
        sellerId,
        userRatingId,
      } = args.input;
      if (!(await db("products").where({ id, sellerId }))) {
        return "Product not found";
      }
      await db("products").where({ id, sellerId }).update({
        image,
        name,
        price,
        variants,
        description,
        stock,
        productSeller,
        productSource,
        sold,
        star5,
        star4,
        star3,
        star2,
        star1,
      });
      return "Product sucessfully updated";
    } catch (error) {
      console.log(error);
    }
  },
  followUserOrSeller: async (args: any) => {
    try {
      const { id, accountId, followedAccountId } = args;
      if (accountId.includes("sellers")) {
        accountId.replace("sellers", "");
        const account: any = await db("sellers").where({ sellerId: accountId });
        const accountFollowing: any = account["following"] + 1;
        await db("sellers").where({ sellerId: accountId }).update({
          following: accountFollowing,
        });
      } else if (accountId.includes("users")) {
        accountId.replace("users", "");
        const account: any = await db("users").where({ userId: accountId });
        const accountFollowing: any = account["following"] + 1;
        await db("users").where({ userId: accountId }).update({
          following: accountFollowing,
        });
      }
      if (followedAccountId.includes("sellers")) {
        followedAccountId.replace("sellers", "");
        const unfollowedAccount: any = await db("sellers").where({
          sellerId: followedAccountId,
        });
        const unfolloweedAccountFollower: any =
          unfollowedAccount["follower"] + 1;
        await db("sellers").where({ sellerId: followedAccountId }).update({
          follower: unfolloweedAccountFollower,
        });
      } else if (followedAccountId.includes("users")) {
        followedAccountId.replace("users", "");
        const unfollowedAccount: any = await db("users").where({
          userId: followedAccountId,
        });
        const unfolloweedAccountFollower: any =
          unfollowedAccount["follower"] + 1;
        await db("users").where({ sellerId: followedAccountId }).update({
          follower: unfolloweedAccountFollower,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  unfollowUserOrSeller: async (args: any) => {
    try {
      const { id, accountId, unfollowedAccountId } = args;
      if (accountId.includes("sellers")) {
        accountId.replace("sellers", "");
        const account: any = await db("sellers").where({ sellerId: accountId });
        const accountFollowing: any = account["following"] - 1;
        await db("sellers").where({ sellerId: accountId }).update({
          following: accountFollowing,
        });
      } else if (accountId.includes("users")) {
        accountId.replace("users", "");
        const account: any = await db("users").where({ userId: accountId });
        const accountFollowing: any = account["following"] - 1;
        await db("users").where({ userId: accountId }).update({
          following: accountFollowing,
        });
      }
      if (unfollowedAccountId.includes("sellers")) {
        unfollowedAccountId.replace("sellers", "");
        const unfollowedAccount: any = await db("sellers").where({
          sellerId: unfollowedAccountId,
        });
        const unfolloweedAccountFollower: any =
          unfollowedAccount["follower"] - 1;
        await db("sellers").where({ sellerId: unfollowedAccountId }).update({
          follower: unfolloweedAccountFollower,
        });
      } else if (unfollowedAccountId.includes("users")) {
        unfollowedAccountId.replace("users", "");
        const unfollowedAccount: any = await db("users").where({
          userId: unfollowedAccountId,
        });
        const unfolloweedAccountFollower: any =
          unfollowedAccount["follower"] - 1;
        await db("users").where({ sellerId: unfollowedAccountId }).update({
          follower: unfolloweedAccountFollower,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  addReviewProduct: async (args: any) => {
    try {
      const {
        id,
        userReviewId,
        userReviewName,
        userReviewDescription,
        reviewRating,
        reviewPostedDate,
        sellerId,
        productName,
      } = args;
      const review = await db("userRating").where({
        id,
        userId: userReviewId,
        productName,
        sellerId,
      });
      if (review) {
        return "You have reviewed this product";
      }
      await db("userRating")
        .insert({
          userReviewId,
          userReviewName,
          userReviewDescription,
          reviewRating,
          reviewPostedDate,
          sellerId,
          productName,
        })
        .returning("*");
      return "You have successfully posted your review";
    } catch (error) {
      console.log(error);
    }
  },
  deleteReviewProduct: async (args: any) => {
    try {
      const { id, userReviewId, sellerId, productName } = args;
      const review = await db("userRating").where({
        id,
        userId: userReviewId,
        productName,
        sellerId,
      });
      if (!review) {
        return "You have not review this product";
      }
      await db("userRating")
        .where({ id, userId: userReviewId, productName, sellerId })
        .del();
      return "You have successfully deleted your review";
    } catch (error) {
      console.log(error);
    }
  },
  deleteProduct: async (args: any) => {
    try {
      const { id, productName, sellerId } = args;
      const product = await db("products").where({ id, productName, sellerId });
      if (!product) {
        return "You have not created this product";
      }
      await db("products").where({ id, productName, sellerId }).del();
      return "You have successfully deleted your product";
    } catch (error) {
      console.log(error);
    }
  },
  createSellerAccount: async (args: any) => {
    try {
      const {
        sellerEmail,
        sellerName,
        sellerPic,
        sellerDescription,
        sellerRating,
        sellerStatus,
        sellerProductsSold,
        follower,
        following,
        dropshipStore,
        sellerId,
      } = args.input;
      const seller = await db("sellers").where({ sellerEmail });
      if (seller) {
        return "Seller with that email already exist!";
      }
      await db("sellers").insert({
        sellerEmail,
        sellerName,
        sellerPic,
        sellerDescription,
        sellerRating,
        sellerStatus,
        sellerProductsSold,
        follower,
        following,
        dropshipStore,
        sellerId,
      });
      return "You have successfully created your seller account";
    } catch (error) {
      console.log(error);
    }
  },
  editSellerAccount: async (args: any) => {
    try {
      const { id } = args;
      const {
        sellerEmail,
        sellerName,
        sellerPic,
        sellerDescription,
        sellerRating,
        sellerStatus,
        sellerProductsSold,
        follower,
        following,
        dropshipStore,
        sellerId,
      } = args.input;
      const seller = await db("sellers").where({ sellerEmail, sellerId });
      if (!seller) {
        return "Seller not found!";
      }
      await db("sellers").where({ sellerEmail, sellerId }).update({
        sellerName,
        sellerPic,
        sellerDescription,
        sellerRating,
        sellerStatus,
        sellerProductsSold,
        follower,
        following,
        dropshipStore,
      });
      return "You have successfully updated your seller profile";
    } catch (error) {
      console.log(error);
    }
  },
  deleteSellerAccount: async (args: any) => {
    try {
      const { id, sellerEmail, sellerId } = args;
      const seller = await db("sellers").where({ sellerEmail, sellerId });
      if (!seller) {
        return "Seller not found!";
      }
      await db("sellers").where({ sellerEmail, sellerId }).del();
      return "You have successfully deleted your seller account";
    } catch (error) {
      console.log(error);
    }
  },
  addAnotherDropshipStoreToTheSellerAccount: async (args: any) => {
    try {
      const { id, sellerId, dropshipStore } = args;
      const seller = await db("sellers").where({ sellerId });
      if (!seller) {
        return "Seller not found!";
      }
      await db("sellers").where({ sellerId }).update({
        dropshipStore,
      });
      return "You have successfully updated your dropship online store";
    } catch (error) {
      console.log(error);
    }
  },
  addOrIncrementProductToCart: async (args: any) => {
    try {
      const { id, userId, productInfo } = args;
      const cart: any = await db("cart").where({ userId, productInfo });
      //if product already in cart, then update it, else add it.
      if (cart) {
        await db("cart")
          .where({ userId, productInfo })
          .update({ amount: cart.amount + 1 });
        return "Product successfully added to the cart";
      }
      await db("cart").insert({
        userId,
        productInfo,
      });
      return "Product successfully added to the cart";
    } catch (error) {
      console.log(error);
    }
  },
  removeProductFromCart: async (args: any) => {
    try {
      const { id, productInfo, userId } = args;
      const cart: any = await db("cart").where({ userId, productInfo });
      if (!cart) {
        return "Product doesn't exist in cart!";
      }
      await db("cart").where({ userId, productInfo }).del();
      return "You have successfully deleted your product in cart";
    } catch (error) {
      console.log(error);
    }
  },
  addProductToOrder: async (args: any) => {
    try {
      const { id, productInfo, userId } = args;
      await db("orders").insert({
        productInfo,
        userId,
        isCanceled: false,
      });
      return "Product successfully added to the orders";
    } catch (error) {
      console.log(error);
    }
  },
  cancelProductOrder: async (args: any) => {
    try {
      const { id, productInfo, userId } = args;
      const order: any = await db("orders").where({ userId, productInfo });
      if (!order) {
        return "Product doesn't exist in orders!";
      }
      await db("orders").where({ userId, productInfo }).update({
        isCanceled: true,
      });
      return;
    } catch (error) {
      console.log(error);
    }
  },
  askQuestion: async (args: any) => {
    try {
      const { id, questionTittle, questionDescription, accountId } = args;
      await db("helpQuestions").insert({
        questionTittle,
        questionDescription,
        accountId,
      });
      return "Your question has been posted";
    } catch (error) {
      console.log(error);
    }
  },
  answerQuestion: async (args: any) => {
    try {
      const {
        id,
        questionTittle,
        askerAccountId,
        answerAccountId,
        answerDescription,
        answerDate,
      } = args;
      await db("answerQuestions").insert({
        questionTittle,
        askerAccountId,
        answerAccountId,
        answerDescription,
        answerDate,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default mutationResolvers;
