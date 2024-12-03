const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main'); 
const ctrlClassInfo = require('../controllers/classInfo')

router
    .route('/')
    //.get(ctrlMain.index);

router
    .route('/archers')
    .post(ctrlMain.archersCreate);

router
    .route('/archerLogin')
    .post(ctrlMain.archersCheck);

router
    .route('/getClassInfo/:id')
    .get(ctrlClassInfo.getClassInfo);

module.exports = router;