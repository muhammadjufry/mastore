import express from "express";
import db from "../database/database";
const router = express.Router();

router.get("/user/:userTokenlogin", async (req, res) => {
  const { userTokenlogin } = req.params;
  const userDetail = await db("users").where({
    "user-token-login": userTokenlogin,
  });
  res.send({ user: userDetail });
});

export default router;
