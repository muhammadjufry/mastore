import express from "express";
import db from "../database/database";
const router = express.Router();

router.get("/user/:userEmail", async (req, res) => {
  const { userEmail } = req.params;
  const userDetail = await db("users").where({ email: userEmail });
  res.send(userDetail);
});

export default router;
