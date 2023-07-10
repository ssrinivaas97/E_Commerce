const router = require("express").Router();


const Stripe = require('stripe'); 
const stripe = Stripe('sk_test_51MBoA5HJogvUxyFugXkeFRy23V4QwNEymzt9Kq9gkdBnehK5Yu2aoKbd9SmRvukPbKCSQ9ZOufbLHDgS3HIC5po500F3TdAVtQ')

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;