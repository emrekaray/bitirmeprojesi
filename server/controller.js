const mongoose = require("mongoose");
const user = require("./models/loginSchema");
const User = require("./models/User");

module.exports.findUser = (object) => {
    return new Promise((resolve, reject) => {
        user.userModel
            .find({ email: User.email, password: User.parola })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err + "Giriş Yapılamadı ");
            });
    });
};