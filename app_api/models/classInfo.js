const mongoose = require('mongoose');

const classInfoSchema = new mongoose.Schema({
    classTitle: {type: String, required: true},
    classDescription: {type: String, required: true},
    instructor: {type: String, required: true},
    classTimes: {type: [String], required: true}
}, {collection: 'classInfo'});

mongoose.model('classInfo', classInfoSchema);
