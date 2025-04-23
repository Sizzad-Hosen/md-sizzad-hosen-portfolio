import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

export const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log('✅ Already connected to MongoDB');
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Successfully connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
  }
};
