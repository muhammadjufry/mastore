import express from "express";
import db from "../database/database";
import bcrypt from "bcrypt";
import crypto from "crypto";
import SendEmail from "../utils/sendEmail";
const router = express.Router();

router.post("/user/register", async (req, res) => {
  console.log(req.body);
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
  } = req.body;
  if (password !== confirmPassword) {
    return res.status(401).send("Please write match password!");
  }

  await db("users")
    .select("email")
    .where("email", email)
    .then((rows) => {
      console.log(rows);
      if (rows.length !== 0) {
        return res
          .status(401)
          .send("User with provided email already registered!");
      }
    });

  await db("users")
    .select("username")
    .where("username", username)
    .then((rows) => {
      console.log(rows);
      if (rows.length !== 0) {
        return res
          .status(401)
          .send("User with provided username already registered!");
      }
    });

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log(password, hashedPassword);
  const verficationCode = crypto.randomBytes(6).toString("base64");
  const user: any = await db("users")
    .insert({
      name,
      username,
      email,
      password: hashedPassword,
      "confirm-password": hashedPassword,
      "cart-id": cartId,
      "order-id": orderId,
      "phone-number": phoneNumber,
      address,
      following,
      follower,
      "verfication-code": verficationCode,
      "user-token-login": crypto.randomBytes(64).toString("hex"),
    })
    .returning("*");
  SendEmail({
    sendEmailTo: email,
    subject: `MASTORE | YOUR VERIFICATION CODE IS ${verficationCode}`,
    message: `<h2>Thank you for registering at MA STORE</h2> <p>Click this <a href="http://localhost:8080/api/v1/user/verify/${verficationCode}">link</a> to verify your email </p> <p>If this email is not you please ignore this email, Thank you</p> <p>Best wishes <br /> <b>MA STORE</b></p>`,
  });
  res.status(200).send({
    userTokenLogin: user["user-token-login"],
  });
});

export default router;
