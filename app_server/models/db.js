const mongoose = require('mongoose');
const dbURI = "mongodb+srv://jasonoconnnor:jay1@wfapp0.nlsfm.mongodb.net/?retryWrites=true&w=majority&appName=WFApp0";
try {
    mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log(" Mongoose is connected")},
    err=> {console.log(err)}
    );
    }
    catch (e) {
    console.log("could not connect");
    }
    require('./locations');