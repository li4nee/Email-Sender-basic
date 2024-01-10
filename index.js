

//please create a .env file and type ,USER='your_email_address' and PASSWORD='your app password from google'
const nodemailer = require("nodemailer");
require('dotenv').config();
const path = require('path');

const transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.com", 
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER,//your email address
      pass: process.env.PASSWORD // your app password you get from google
    },
  });

  const mailOptions = {
    from:
    {
        name:"SENDER'S NAME",//your name
        address:process.env.USER //your email address 
    }, 
    to:["exampleemail1@gmail.com","exampleemail2@gmail.com"], // list of receivers
    subject: "Subject of your email", // Subject line
    text: "Text you want to send", // plain text body
    html: "<h1><b>ANYTHING YOU WANT TO SAY</b><h1>", // html body
    attachments:[{
        filename:"cutie.jpg",
        path: path.join(__dirname,"cutie.jpg"),
        contentType:"image/jpg"
    }]  // you can send array of different attachments in this format. Attachment can be pdf,image or any supported file.
  }

const sendMail= async(transporter,mailOptions)=>{
try{
    await transporter.sendMail(mailOptions);
    console.log("Email sent sucessfully")
}
catch(err)
{
console.log(err);
}
}

sendMail(transporter,mailOptions);