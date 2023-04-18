import express from "express";
import db from "../database/database";
const router = express.Router();

router.put("/user/updateUser/:userEmail", async (req, res) => {
  const { userEmail } = req.params;
  const { name, username, email, address, phoneNumber } = req.body;

  try {
    const updateUser = await db("users").where({ email: userEmail }).update({
      name,
      username,
      email,
      address,
      "phone-number": phoneNumber,
    });

    if (updateUser) {
      res.status(200).json({
        message: `User has been updated.`,
        updatedUser: updateUser,
      });
    } else {
      res.status(404).json({
        message: `User not found.`,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
