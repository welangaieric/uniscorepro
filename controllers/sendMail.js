const nodemailer = require("nodemailer");

const sendMail = (email, message,subject) => {
  // Create a transporter using Gmail SMTP
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "uniscorepro@gmail.com", // Replace with your Gmail email address
      pass: "fmpa lqcb qdov ppnk", // Gmail password 
    },
  });
  let mailOptions = {
    from: "uniscorepro@gmail.com", // Sender address 
    to: email, // List of recipients
    subject: subject, // Subject line
    text: message, // Plain text body
    
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error("Error occurred while sending email:", error);
    }
    console.log("Email sent:", info.response);
  });
};
module.exports =sendMail