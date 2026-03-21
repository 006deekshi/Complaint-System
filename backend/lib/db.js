const mongoose = require("mongoose")

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongodb is connected successfully...");
    }
    catch(error){
        console.log("Error in connecting to mongodb...",error);
    }
}

module.exports = connectDB;