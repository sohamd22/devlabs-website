import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/contact', (req, res) => {
    const {name, email, message} = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'people@devlabs.club',
            pass: process.env.CONTACT_PASSWORD
        }
    });
      
    var mailOptions = {
        from: 'people@devlabs.club',
        to: 'people@devlabs.club',
        subject: `Contact form message from ${name}`,
        text: `${message}\n\nName: ${name} | Email: ${email}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
        res.status(500);
    } else {
        console.log('Email sent: ' + info.response);
        res.status(200);
    }
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});