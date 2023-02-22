import express from "express";

const router = express.Router();

import createUser from "./createUser";
import verifyUser from "./verifyUser";
import generateToken from "./generateToken";
import forgotPassword from "./forgotPassword";
import deleteUser from "./deleteUser";
import updateUser from "./updateUser";
import blockUser from "./blockUser";
import unblockUser from "./unblockUser";
import becomeSeller from "./becomeSeller";
import unbecomeSeller from "./unbecomeSeller";
import addPhoneNumber from "./addPhoneNumber";
import verifyPhoneNumber from "./verifyPhoneNumber";
import removePhoneNumber from "./removePhoneNumber";
import sendEmail from './sendEmail'

router.post("/createUser", createUser);
router.post("/verifyUser/:verifyUserToken", verifyUser);
router.post("/generateToken", generateToken);
router.post("/forgotPassword", forgotPassword);
router.post("/deleteUser/:userTokenId", deleteUser);
router.post("/updateUser/:userTokenId", updateUser);
router.post("/blockUser/:userTokenId", blockUser);
router.post("/unblockUser/:userTokenId", unblockUser);
router.post("/becomeSeller/:userTokenId", becomeSeller);
router.post("/unbecomeSeller:/userTokenId", unbecomeSeller);
router.post("/addPhoneNumber/:userTokenId", addPhoneNumber);
router.post("/verifyPhoneNumber/:userTokenId", verifyPhoneNumber);
router.post("/removePhoneNumber/:userTokenId", removePhoneNumber);
router.post("/sendEmail/:userTokenId", sendEmail);

export default router;
