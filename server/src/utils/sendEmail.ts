import dotenv from "dotenv";
dotenv.config({ path: "../../.env.local" });
const nodemailer = require("nodemailer");
import { google } from "googleapis";
const OAuth2 = google.auth.OAuth2;

interface Props {
  sendEmailTo: string;
  subject: string;
  message: string;
}

export default function SendEmail(data: Props) {
  console.log({
    cleintId:
      "95875281566-s6hhl1p975s78ula52hitd95jh8fbhj1.apps.googleusercontent.com",
    secret: "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",
  });
  const oauth2Client = new OAuth2(
    "95875281566-s6hhl1p975s78ula52hitd95jh8fbhj1.apps.googleusercontent.com",
    "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",
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token:
      "1//04QvsiTVD_jFaCgYIARAAGAQSNwF-L9IreriEGYTFU2_P2MzWTo0lpWHbO73ENxE7EvxZAj6qoEsgMXif2hHUDu6VfmHOF4oRZwI",
  });

  const accessToken = oauth2Client.getAccessToken();

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "mastore.noreply@gmail.com",
      clientId:
        "95875281566-s6hhl1p975s78ula52hitd95jh8fbhj1.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken:
        "1//04QvsiTVD_jFaCgYIARAAGAQSNwF-L9IreriEGYTFU2_P2MzWTo0lpWHbO73ENxE7EvxZAj6qoEsgMXif2hHUDu6VfmHOF4oRZwI",
      accessToken,
    },
  });

  transporter.sendMail({
    from: process.env.USER_NAME_SENDER,
    to: data.sendEmailTo,
    subject: data.subject,
    html: data.message,
  });

  console.log("sent");
}
