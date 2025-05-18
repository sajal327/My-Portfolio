require("dotenv").config(); // Add this line to load environment variables
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send emails
const app = express();
// app.use(
//   cors({
//     origin: process.env.FRONTEND_ORIGIN,
//   })
// );

const corsOptions = {
  origin: process.env.FRONTEND_ORIGIN || "http://localhost:3000", // Frontend URL (React default port)
  methods: "GET,POST",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);
app.get("/", (req, res) => {
  res.send("Server is running");
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});

// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Use environment variable
    pass: process.env.EMAIL_PASS, // Use environment variable
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`; // Concatenate first and last name
  const mail = {
    from: name,
    to: process.env.RECEIVER_EMAIL,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      res.json({ code: 500, status: "Error", message: error });
    } else {
      res.json({
        code: 200,
        status: "Message Sent",
        messageId: info.messageId,
      });
    }
  });
});

// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// // server used to send send emails
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: "********@gmail.com",
//     pass: ""
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/contact", (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: name,
//     to: "sajallaha16@gmail.com",
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json({ code: 200, status: "Message Sent" });
//     }
//   });
// });
