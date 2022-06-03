const User = require("../models/User");

exports.girisyap = (req, res, next) => {
    /**Giriş Ekranı gösteriliyor */
    res.render("views/loginpage");
};


exports.kayitPostSayfasi = (req, res, next) => {
    /**kayıt ol butonuna basıldığınnda veriler bu kısıma gelip burada çalışacak */
    const { ad, soyad, email, parola, parolaTekrar } = req.body;

}