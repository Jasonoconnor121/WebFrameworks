const request = require('request');
const apiOptions = { 
server : 'http://localhost:3000' 
}; 

if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://webframeworks-joc.onrender.com'; 
}
const mongoose = require('mongoose');
const archer = mongoose.model('Archer');

const archersCreate = async function (req, res) {
    try {
        const newArcher = new archer({
            fName: req.body.fName,
            lName: req.body.lName,
            uName: req.body.uName,
            email: req.body.email,
            password: req.body.password,
            addressStreet: req.body.addressStreet,
            addressTown: req.body.addressTown,
            addressCounty: req.body.addressCounty
        });

        await newArcher.save();

        res
            .status(201)
            .json({
                message: 'Archer created successfully',
                archer: newArcher
        });
    } catch (err) {
        console.error('Error creating archer:', err); 
        res
            .status(400)
            .json({
                message: 'Error creating archer',
                error: err.message || err
        });
    }
};

const archersCheck = function (req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
        res
            .status(400)
            .json({
                message: 'Username and password are required',
        });
        return;
    }

    archer.findOne({ uName: username })
        .then(user => {
            if (!user) {
                res
                    .status(401)
                    .json({
                        message: 'Invalid username or password',
                });
                return;
            }

            if (user.password === password) {
                res
                    .status(200)
                    .json({
                        message: 'Login successful',
                        user,
                });
            } else {
                res
                .status(401)
                .json({
                    message: 'Invalid username or password',
                });
            }
        })
        .catch(err => {
            console.error('Error during login:', err);
            res
            .status(500)
            .json({
                message: 'Server error during login',
                error: err,
            });
        });
};


module.exports = {
    archersCreate,
    archersCheck
};