// const mongoose = require("mongoose");

// const DBconnection = function(){

// const DB_URI = process.env.MONGO_URL;

// mongoose.connect(DB_URI,{
//     useNewUrlParser : true,
//     useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on("error",console.error.bind(console,"connection error: "));

// db.once("open",()=>{
//     console.log("connection established succesfully");
// });

// }

// module.exports = DBconnection; 

const mongoose = require('mongoose');

function DbConnection() {
    const DB_URL = process.env.MONGO_URL;

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "Connection error:"));
    db.once("open", function () {
        console.log("Db connected...");
    });
}

module.exports = DbConnection;