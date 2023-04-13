const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');

//admin registration
exports.adminSignup = (req, res) => {
    try {
        const admin = new Admin(req.body);
        // New admin object will be created.
        admin
            .save(admin)
            .then((admin) => {
                res.json({
                    name: admin.name,
                    email: admin.email,
                    id: admin._id,
                });
            })
            .catch((error) => {
                if (error.code === 11000) {
                    return res.status(400).json({
                        error: 'Email id is already in use.',
                    });
                }
                return res.status(400).json({
                    error: 'Failed to create the admin. Please try again.',
                });
            });
    } catch (error) {
        return res.status(400).json({
            error: 'Failed to create the user. Please try again.',
        });
    }
};

//admin login
exports.signIn = (req, res) => {
    const { email, password } = req.body;
    Admin.findOne({ email }, (err, user) => {
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
