const fs = require('fs');

function adminUserMiddleware(req, res, next) {
    let admins = ['Ada', 'Greta', 'Vim','Tim'];
    let userQuery = req.query.user;

    if(userQuery){
        let admin = admins.find(function(user){
            return userQuery == user;
        });
        console.log(admin);
        if(admin != undefined){
            next();
        } else {
            res.send('El usuario ' + userQuery + ' no tienes los privilegios para ingresar');
        } 
    } else {
        res.send('El usuario no tienes los privilegios para ingresar');
    }
}

module.exports = adminUserMiddleware;