const path = require('path');
const { validationResult, check, body } = require('express-validator');


let mainController = {

    /**  Aqui van los metodos que se encargan de manejar a los profesores*/
   
    index: function (req, res) {
        res.render('index');
    },

    validation: function (req, res) {
        let userAdmin = req.query.user;
        res.send("Hola Admin: " + userAdmin);
    }
};

module.exports = mainController;