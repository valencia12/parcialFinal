const mongoose = requiere('mongoose');
const {mongodb} = requiere('./keys');

mongoose.connect(mongodb.uri,{
    userCreateIndex: true,
    useNewUrlParser:true
})
.then(db=>console.log("Coneccion succes"))
.cath(err=>console(err));