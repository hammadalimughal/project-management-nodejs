const mongoose = require("mongoose");
// const mongoDbUri = 'mongodb://localhost:27017';
const mongoDbUri = `mongodb+srv://codemark:Ryzen0296@cluster0.n0rgkru.mongodb.net/project-management-webapp`;

const connectionWithDb = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoDbUri,()=>{
        console.log("Connection Successfull")
    })
}

module.exports = connectionWithDb;