const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('MongoDB connected');
    
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    await User.findOneAndUpdate(
      { email: 'admin@ecommerce.com' },
      {
        name: 'Admin',
        email: 'admin@ecommerce.com',
        password: hashedPassword,
        isAdmin: true
      },
      { upsert: true, new: true }
    );
    
    console.log('Admin user created successfully!');
    console.log('Email: admin@ecommerce.com');
    console.log('Password: admin123');
    process.exit();
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
