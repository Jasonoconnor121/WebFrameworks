const mongoose = require('mongoose');
const archerSchema = new mongoose.Schema({ 
    fName: {
        type: String,
        required: true
        },
    lName: {
        type: String,
        required: true
        },
    uName: {
        type: String,
        required: true
        },
    email: {
        type: String,
        required: true
        },
    password: {
        type: String,
        required: true
        },
    addressStreet: {
        type: String,
        required: true
        },
    addressTown: {
        type: String,
        required: true
        },
    addressCounty: {
        type: String,
        required: true
        }
});
mongoose.model('Archer', archerSchema);
