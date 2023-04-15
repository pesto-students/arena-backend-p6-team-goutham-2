const user = require('../models/user');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const request = require('request');
const Courts = require('../models/court');
exports.signup = (req, res) => {
  try {
    const user = new User(req.body); // New user object will be created.
    user
      .save(user)
      .then((user) => {
        res.json({
          name: user.name,
          email: user.email,
          id: user._id,
        });
      })
      .catch((error) => {
        if (error.code === 11000) {
          return res.status(400).json({
            error: 'Email id is already in use.',
          });
        }
        return res.status(400).json({
          error: 'Failed to create the user. Please try again.',
        });
      });
  } catch (error) {
    return res.status(400).json({
      error: 'Failed to create the user. Please try again.',
    });
  }
};
exports.signIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (user && user.authenticate(password)) {
      //create token
      const token = jwt.sign({ _id: user._id }, process.env.SECRET);
      // put token in cookie
      res.cookie('token', token, { expire: new Date() + 9999 });
      //send to front end
      const { _id, name, email, role } = user;
      return res.json({
        token,
        user: { _id, name, email, role },
      });
    } else {
      return res.status(400).json({
        error: 'Email & Password do not match',
      });
    }
  });
};

//get user details

exports.getUser = async (req, res) => {
  try {
    const User = await user.findById({ _id: req.params.user_id });
    res.json({ data: User, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.Payment = async (req, res) => {
  try {
    const court = await Courts.find({ owner_id: req.body.owner_id });
    // res.json({ data: court, status: "success" });
    var options = {
      'method': 'POST',
      'url': 'https://api.razorpay.com/v1/orders',
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(process.env.KEYID + ":" + process.env.KEYSECRET).toString('base64')
      },
      body: JSON.stringify({
        "amount": court[0]?.price * 100,
        "currency": "INR",
        "receipt": "Receipt no. 1",
        "notes": {
          "notes_key_1": "Court booking",
          "notes_key_2": "Payment process"
        }
      })

    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      res.json({ data: JSON.parse(response.body), status: "success" });
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};