const request = require('request');
const apiOptions = { 
server : 'http://localhost:3000' 
}; 

if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://webframeworks-joc.onrender.com'; 
}
const mongoose = require('mongoose');
const archer = mongoose.model('Archer');

const archersCreate = function (req, res){
    try {
        const newArcher = new archer({
            fName: req.body.firstName,
            lName: req.body.lastName,
            uName: req.body.username,
            email: req.body.email,
            password: req.body.password, // Note: Passwords should be hashed in production!
            addressStreet: req.body.street,
            addressTown: req.body.town,
            addressCounty: req.body.county
        });

        newArcher.save();
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Error creating archer', error: err });
    }
};

const archersCheck = function (req, res){
    const username = req.body.username;
    const password = req.body.password;

    archer.findOne({ uName: username, password: password })
    .then(user => {
        if (user) {
            res.status(200).json({ message: 'Login successful', user });

        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    })
    .catch(err => {
        console.error('Error during login:', err);
        res.status(500).json({ message: 'Server error', error: err });
    });
};


module.exports = {
    archersCreate,
    archersCheck
};