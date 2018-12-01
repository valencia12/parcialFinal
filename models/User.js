const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt-nodejs');

//esquemas
const inforShema = new Schema({
    nombre: {type:String, unique:true, required:true},
    cadena: {type:String, required:true,},
    anios: {type:Number}
});

module.exports = mongoose.model('users', inforShema);


