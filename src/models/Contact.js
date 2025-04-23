import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String, // ✅ Added subject field
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
