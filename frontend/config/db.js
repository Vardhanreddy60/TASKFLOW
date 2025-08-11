
   /* const mongoose = require('mongoose');
    
    const db = async () => {
        try {
            mongoose.set('strictQuery', false)
            await mongoose.connect(process.env.MONGO_URL)
            console.log('Db Connected')
        } catch (error) {
            console.log('DB Connection Error');
        }
    }
    
    module.exports = {db}*/

    // backend/config/db.js
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};

