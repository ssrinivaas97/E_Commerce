const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: (await bcrypt.hash(req.body.password, 10)).toString(),
    //(await bcrypt.hash(req.body.password, 10)).toString();
    // password: req.body.password
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});


//LOGIN
router.post('/login', (req, res) => {
  //email and loginpassword
  const username = req.body.username
  const loginpassword = req.body.password
  //find user exist or not
  User.findOne({ username })
    .then(user => {
      //if user not exist than return status 400
      if (!user) return res.status(400).json({ msg: "Username does not exist." })
      //if user exist than compare password
      //loginpassword comes from the user
      //user.password comes from the database
      bcrypt.compare(loginpassword, user.password, (err, data) => {
        //if error than throw error
        if (err) throw err
        //if both match than you can do anything
        if (data) {
          const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
                {expiresIn:"3d"}
            );
          const { password, ...others } = user._doc;
          res.status(200).json({...others, accessToken});
        } else {
          return res.status(401).json({ msg: "Username and password do not match." })
        }
      })
    })
})
module.exports = router;