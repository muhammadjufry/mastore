import db from "../../database/database";
import { redisClient } from "../../index";

const queriesResolvers = {
  getUserDetail: async (args: any) => {
    try {
      const cachedData = await redisClient.get("users");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const usersData = await db("users").where("id", args.id);
        await redisClient.set("users", JSON.stringify(usersData));
        console.log("new data cached");
        return usersData;
      }
    } catch (error) {
      console.log(error);
    }
  },
  getProductDetail: async (args: any) => {
    try {
      const cachedData = await redisClient.get("products");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const productsData = await db("products").where("id", args.id);
        await redisClient.set("products", JSON.stringify(productsData));
        console.log("new data cached");
        return productsData;
      }
    } catch (error) {
      console.log(error);
    }
  },
  searchProduct: async (args: any) => {
    try {
      const cachedData = await redisClient.get("products");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const productsData = await db("products").where(
          "title",
          "like",
          `%${args.searchQuery}%`
        );
        await redisClient.set("products", JSON.stringify(productsData));
        console.log("new data cached");
        return productsData;
      }
    } catch (error) {
      console.log(error);
    }
  },
  mostpopularProduct: async (args: any) => {
    try {
      const cachedData = await redisClient.get("products");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const productsData = await db("products")
          .orderBy("sold", "desc")
          .orderBy("rating", "desc");
        await redisClient.set("products", JSON.stringify(productsData));
        console.log("new data cached");
        return productsData;
      }
    } catch (error) {
      console.log(error);
    }
  },
  productsForUser: async (args: any) => {
    try {
      const cachedData = await redisClient.get("products");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const productsData = await db("products").where(
          "title",
          "like",
          `%${args.searchQuery}%`
        );
        await redisClient.set("products", JSON.stringify(productsData));
        console.log("new data cached");
        return productsData;
      }
    } catch (error) {
      console.log(error);
    }
  },
  orderListsForUser: async () => {
    try {
      const cachedData = await redisClient.get("orders");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const ordersData = await db("orders").select("*");
        await redisClient.set("orders", JSON.stringify(ordersData));
        console.log("new data cached");
        return ordersData;
      }
    } catch (error) {
      console.log(error);
    }
  },
  orderListsForSeller: async () => {
    try {
      const cachedData = await redisClient.get("orders");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const ordersData = await db("orders").select("*");
        await redisClient.set("orders", JSON.stringify(ordersData));
        console.log("new data cached");
        return ordersData;
      }
    } catch (error) {
      console.log(error);
    }
  },
  cart: async () => {
    try {
      const cachedData = await redisClient.get("cart");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const cartData = await db("cart").select("*");
        await redisClient.set("cart", JSON.stringify(cartData));
        console.log("new data cached");
        return cartData;
      }
    } catch (error) {
      console.log(error);
    }
  },
  userRating: async () => {
    try {
      const cachedData = await redisClient.get("userRating");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const userRatingData = await db("userRating").select("*");
        await redisClient.set("userRating", JSON.stringify(userRatingData));
        console.log("new data cached");
        return userRatingData;
      }
    } catch (error) {
      console.log(error);
    }
  },
  paymentInfo: async () => {
    try {
      const cachedData = await redisClient.get("paymentInfo");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const paymentInfoData = await db("paymentInfo").select("*");
        await redisClient.set("paymentInfo", JSON.stringify(paymentInfoData));
        console.log("new data cached");
        return paymentInfoData;
      }
    } catch (error) {
      console.log(error);
    }
  },
  getUserChatLists: async () => {
    try {
      const cachedData = await redisClient.get("chatLists");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const chatListsData = await db("chatLists").select("*");
        await redisClient.set("chatLists", JSON.stringify(chatListsData));
        console.log("new data cached");
        return chatListsData;
      }
    } catch (error) {
      console.log(error);
    }
  },
  getSellerChatLists: async () => {
    try {
      const cachedData = await redisClient.get("chatLists");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const chatListsData = await db("chatLists").select("*");
        await redisClient.set("chatLists", JSON.stringify(chatListsData));
        console.log("new data cached");
        return chatListsData;
      }
    } catch (error) {
      console.log(error);
    }
  },
  getUserChatDetailHistory: async (args: any) => {
    try {
      const cachedData = await redisClient.get("chatDetail");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const chatDetailData = await db("chatDetail").where("id", args.id);
        await redisClient.set("chatDetail", JSON.stringify(chatDetailData));
        console.log("new data cached");
        return chatDetailData;
      }
    } catch (error) {
      console.log(error);
    }
  },
  getSellerChatDetailHistory: async (args: any) => {
    try {
      const cachedData = await redisClient.get("chatDetail");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const chatDetailData = await db("chatDetail").where("id", args.id);
        await redisClient.set("chatDetail", JSON.stringify(chatDetailData));
        console.log("new data cached");
        return chatDetailData;
      }
    } catch (error) {
      console.log(error);
    }
  },
  seller: async (args: any) => {
    try {
      const cachedData = await redisClient.get("sellers");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const sellersData = await db("sellers").where("id", args.id);
        await redisClient.set("sellers", JSON.stringify(sellersData));
        console.log("new data cached");
        return sellersData;
      }
    } catch (error) {
      console.log(error);
    }
  },
  getAllQuestions: async () => {
    try {
      const cachedData = await redisClient.get("helpQuestions");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const helpQuestionsData = await db("helpQuestions").select("*");
        await redisClient.set(
          "helpQuestions",
          JSON.stringify(helpQuestionsData)
        );
        console.log("new data cached");
        return helpQuestionsData;
      }
    } catch (error) {
      console.log(error);
    }
  },
  searchQuestion: async () => {
    try {
      const cachedData = await redisClient.get("helpQuestions");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const helpQuestionsData = await db("helpQuestions").select("*");
        await redisClient.set(
          "helpQuestions",
          JSON.stringify(helpQuestionsData)
        );
        console.log("new data cached");
        return helpQuestionsData;
      }
    } catch (error) {
      console.log(error);
    }
  },
  questionDetail: async () => {
    try {
      const cachedData = await redisClient.get("questionDetail");
      console.log("cached data", cachedData);
      if (cachedData) {
        console.log("use cached data");
        return JSON.parse(cachedData);
      } else {
        const questionDetailData = await db("questionDetail").select("*");
        await redisClient.set(
          "questionDetail",
          JSON.stringify(questionDetailData)
        );
        console.log("new data cached");
        return questionDetailData;
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default queriesResolvers;
