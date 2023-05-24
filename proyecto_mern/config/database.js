const mongoose = require("mongoose");

const host = "0.0.0.0";
const port = "27017";
const db = "hr";

exports.mongoConnect = () =>{
    //const mongoStringConnection = `mongodb://localhost:27017/hr`
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;

    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("Error", console.error.bind
    (console,"Mongodb connection error"))

}