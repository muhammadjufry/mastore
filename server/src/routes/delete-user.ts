import express from "express";
import db from "../database/database";
const router = express.Router();

router.delete("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  await db("users").where({ userId }).del();
  res.send("User successfully deleted!");
});
export default router;
