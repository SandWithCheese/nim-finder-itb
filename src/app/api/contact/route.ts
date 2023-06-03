export async function POST(req: Request){
    const data = await req.json()

    require("dotenv").config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.from,
            pass: process.env.password,
        },
        secure: true,
    })

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (err: any, succ: any) {
            if (err) {
                console.log(err)
                reject(err)
            } else {
                console.log("Server is ready to take our messages")
                resolve(succ)
            }
        })
    })

    const mailData = {
        from: process.env.from,
        to: process.env.to,
        subject: `Message from ${data.name}`,
        text: data.message,
        html: `<p>${data.message}</p>`
    }

    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailData, (err: any, info: any) => {
            if (err){
                console.log(err)
                reject(err)
            }
            else{
                console.log(info)
                resolve(info)
            }  
        })
    })

    return new Response("Success", {status: 200})
}