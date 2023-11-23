const mongoose = require("mongoose");
// require("dotenv").config();

// const connectionString = process.env.MONGO_URI;
const connectionString =
  "mongodb+srv://ajaynandal51:asknandal@cluster0.bhviz2d.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
