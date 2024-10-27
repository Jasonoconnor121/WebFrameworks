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

const classInfoSchema = new mongoose.Schema({
    classTitle: {
        type: String,
        required: true
        }, 
    classDescription: {
        type: String,
        required: true
        },
    Instructor: {
        type: String,
        required: true
        }
});
mongoose.model('Archers', archerSchema);
mongoose.model('Classes', classInfoSchema);
