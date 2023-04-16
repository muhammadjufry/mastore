import express from "express";
import db from "../database/database";
import bcrypt from "bcrypt";
const router = express.Router();

router.post("/user/login", async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    res.status(401).send("Please write match password!");
  }
  const user = await db("users").where({ email }).first();
  if (!user) {
    res.status(401).json({ message: "Invalid email or password" });
    return;
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    res.status(401).json({ message: "Invalid email or password" });
    return;
  }
  res.json({ user, userTokenLogin: user["user-token-login"] });
});

export default router;
