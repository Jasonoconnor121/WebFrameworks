const mongoose = require('mongoose');
const classInfo = mongoose.model('classInfo');

const getClassInfo = function(req, res){
    const classId = req.params.id; // Get the class ID from the URL
    console.log("Class id: ", classId);
    classInfo.findById(classId)
        .then(classData => {
            if (!classData) {
                return res.status(404).json({ message: 'Class not found' });
            }
            res.status(200).json(classData); // Send the class data back to the frontend
        })
        .catch(err => {
            console.error('Error fetching class data:', err);
            res.status(500).json({ message: 'Error fetching class data', error: err });
        });
};

module.exports = {
    getClassInfo
};