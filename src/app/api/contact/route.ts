export async function POST(req: Request){
    const data = await req.json()

    require("dotenv").config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: "nimfinderitb@gmail.com",
            pass: process.env.password,
        },
        secure: true,
    })

    const mailData = {
        from: "nimfinderitb@gmail.com",
        to: "naufalahmad022@gmail.com",
        subject: `Message from ${data.name}`,
        text: data.message,
        html: `<p>${data.message}</p>`
    }

    transporter.sendMail(mailData, (err: any, info: any) => {
        if (err){
            console.log(err)
        }
        else{
            console.log(info)
        }  
    })

    return new Response("Success", {status: 200})
}