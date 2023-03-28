const Owner = require('../models/owner');
const jwt = require('jsonwebtoken');

//owner registration
exports.ownerSignup = (req, res) => {
    try {
        const owner = new Owner(req.body); 
        // New owner object will be created.
        owner
            .save(owner)
            .then((owner) => {
                res.json({
                    name: owner.name,
                    email: owner.email,
                    id: owner._id,
                });
            })
            .catch((error) => {
                if (error.code === 11000) {
                    return res.status(400).json({
                        error: 'Email id is already in use.',
                    });
                }
                return res.status(400).json({
                    error: 'Failed to create the owner.Please try again.',
                });
            });
    } catch (error) {
        return res.status(400).json({
            error: 'Failed to create the user. Please try again.',
        });
    }
};

//owner login
exports.signIn = (req, res) => {
    const { email, password } = req.body;
    Owner.findOne({ email }, (err, user) => {
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
