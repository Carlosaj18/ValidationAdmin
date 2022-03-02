// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { validationResult, check, body } = require('express-validator');

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

// ************ Middleware Require ************
const logUserMiddleware = require('../middlewares/admin');

// ************ Handler Image Files Home Guest ****************************
const multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images'));
    },
    filename: (req, file, cb) => {
        const newFileName = 'img-user-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});

// ************ Validation ***********************

const fileUpload = multer({storage: multerDiskStorage});

/* Inicio */
/*** GET ALL INFO IN HOME GUEST ***/ 
router.get('/', mainController.index);
router.get('/admin', logUserMiddleware, mainController.validation);
router.get('/services', mainController.index);
router.get('/services/design', mainController.index);


module.exports = router;