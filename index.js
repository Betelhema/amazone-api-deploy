
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// // Load environment variables from .env file


// dotenv.config();

// // Initialize Stripe with the secret key from environment variables
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// // Initialize Express app
// const app = express();

// // Middleware to enable CORS and parse JSON
// app.use(cors({ origin: true }));
// app.use(express.json());

// // Define a simple GET endpoint
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Working",
//   });
// });

// // Define a POST endpoint to handle payments
// app.post("/payment/create", async (req, res) => {
//   try {
//     const total = req.query.total; // Assuming total is sent as a query parameter

//     if (total > 0) {
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: total,
//         currency: "usd",
//       });

//       res.status(201).json({
//         : paymentIntent.client_secret,
//       });
//     } else {
//       res.status(403).json({ error: "The amount must be greater than zero." });
//     }
//   } catch (error) {
//     console.error("Error creating payment intent:", error);
//     res.status(500).json({ error: "An error occurred while creating the payment intent." });
//   } // Closing bracket for try-catch block
// }); // Closing bracket for POST endpoint

// // Export the Express app as a Firebase HTTP function

  
// app.listen(5000, (err) => {
//     if (err) throw err;
//     console.log("Amazon server running on PORT: 5000, http://localhost:5000");
//   });


// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")("sk_test_51PfUQ3Grk86YwXX2NLrDnSORFrIj1Z5ySMBIUufkXLuGk9nY3zoats1a20YPrDcQObB5Yv6MBwuBnL9sQbEARLW5000g2QEcm3");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).json({
//     Message: "success",
//   });
// });

// app.post("/payment/create", async (req, res) => {
//   const total = parseInt(req.query.total) ;
//   if (total > 0) {
//     console.log("Payment received");

//     try {
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: total,
//         currency: "usd",
//       });
//       res.status(202).json({
//         clientSecret: paymentIntent.client_secret,
//       });
//       console.log(paymentIntent);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({
//         Message: "An error occurred while creating the payment intent",
//       });
//     }
//   } else {
//     res.status(401).json({
//       Message: "Total value must be greater than zero",
//     });
//   }
// });

// const port = 5000;
// app.listen(port, (error) => {
//   if (error) {
//     console.error(error);
//     process.exit(1); // Terminate the process if there's an error starting the server
//   } else {
//     console.log(
//       `The server is running successfully at http://localhost:${port}`
//     );
//   }
// });


const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PfUQ3Grk86YwXX2NLrDnSORFrIj1Z5ySMBIUufkXLuGk9nY3zoats1a20YPrDcQObB5Yv6MBwuBnL9sQbEARLW5000g2QEcm3");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    Message: "success",
  });
});

app.post("/payment/create", async(req, res) => {
  const total = parseInt(req.query.total);
  if (total > 0) {
   const paymentIntent= await stripe.paymentIntents.create(
    {amount: total,
    currency:"usd"});
    console.log(paymentIntent);
    res.status(200).json(
        {
            clientSecret: paymentIntent.client_secret,
        }
    );
}else{
    res.status(403).json({
        message:"total must be greaterthan zero"
    });
  }
});

const port = 5000;
app.listen(port, (error) => {
  if (error) {
    console.error(error);
    process.exit(1); // Terminate the process if there's an error starting the server
  } else {
    console.log(
      `The server is running successfully at http://localhost:${port}`
    );
  }
});