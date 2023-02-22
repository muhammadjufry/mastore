import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config()

console.log({pass: process.env.SENDGRID_API_KEY})

let transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY
    },
    tls: {
        rejectUnauthorized: false
    }
 })

export default async function sendEmail() {
    transporter.sendMail({
        from: "muhammadaljufri113@gmail.com",
        to: "Sayyid Muhammad A <sayyidmuhammad878@gmail.com>",
        subject: "Test confirmation email",
        html: "<h3>Test confirmation email please activate your account by clicking link below</h3>"
    }).then((res) => {
        console.log(res, "Email sent!");
    }).catch((error) => {
        console.error("Cannot send email here the error: ", error)
    })
}