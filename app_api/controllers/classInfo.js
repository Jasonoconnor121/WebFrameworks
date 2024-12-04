const request = require('request');
const mongoose = require('mongoose');
const classInfo = mongoose.model('classInfo');
const apiOptions = { 
server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://webframeworks-joc.onrender.com'; 
}

const getClassInfo = function(req, res){
    const classId = req.params.id;
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
