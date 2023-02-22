import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import user from "./routes/user/index";
import sgMail from "@sendgrid/mail";
import sendEmail from './utils/sendEmail';
const app = express();
dotenv.config();

sendEmail();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.listen(port, () => console.log(`Running on port ${port}`));

app.use("/user", user);
