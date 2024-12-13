const mongoose = require("mongoose")

const connectDB = async () => {
  try{
    await mongoose.connect("mongodb+srv://setosun5:Xecv5lRFa7Rr54Xd@cluster0.bai3o.mongodb.net/appDataBase?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Success: Connected to Mongo DB")
  }catch(err){
    console.log("Failure: Unconnected to Mongo DB")
    throw new Error()
  }
}

module.exports = connectDB