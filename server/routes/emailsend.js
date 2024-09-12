import express from 'express';
const router = express.Router();
import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'brennenhammer@gmail.com',
    pass: 'Hammertyme1',
  },
});

router.post('/', (req, res) => {
    console.log('Request received at /api/quotes route');
  const { name, email, phone, address, service, message, recipientEmail } = req.body;

  const mailOptions = {
    from: email,
    to: recipientEmail,
    subject: 'New Quote Request',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Address: ${address}
      Service: ${service}
      Message: ${message}
    `,
  };

  // Use Nodemailer to send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending quote. Please try again.');
    } else {
      console.log('Quote sent successfully!');
      res.send('Quote submitted successfully!');
    }
  });
});

export default router;