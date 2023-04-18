import express from "express";
import db from "../database/database";
const router = express.Router();

router.get("/user/verify/:verificationCode", async (req, res) => {
  const { verificationCode } = req.params;
  try {
    const user = await db("users")
      .where("verfication-code", "=", verificationCode)
      .first();
    if (user) {
      await db("users")
        .where("id", "=", user.id)
        .update({ "verfication-code": "verified" });
      res.status(200).send("Your account has been verified!");
    } else {
      res.status(400).send("Invalid verification code");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

export default router;
