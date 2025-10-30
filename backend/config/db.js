import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // The strictQuery option will be removed in a future Mongoose release
    mongoose.set('strictQuery', true); 
    
    // Connect to MongoDB using the URI from the .env file
    await mongoose.connect(process.env.MONGO_URI);
    
    console.log('✅ MongoDB Connected Successfully');
  } catch (err) {
    console.error(`❌ MongoDB Connection Error: ${err.message}`);
    // Exit process with failure
    process.exit(1); 
  }
};

export default connectDB;