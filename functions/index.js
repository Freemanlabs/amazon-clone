const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HPzLtAbQ83BZb8v7hfpR6TiSEQ2XGTdoDzK7XVYfk6hJQiTFRvE8YbG6vj9YJxaEZUJgDZYziO6NzXZ5tDKxeNU00hhsGQ6rq"
);

// API

// App Config
const app = express();

//  Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment Request Received BOOM!!! for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-d9e7c/us-central1/api)
