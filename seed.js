const mongoose = require('mongoose');
require('dotenv').config();

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, default: 0 }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

const sampleProducts = [
  {
    name: "Laptop HP",
    description: "High performance laptop with Intel i5 processor, 8GB RAM, 512GB SSD",
    price: 45000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    category: "Electronics",
    stock: 15
  },
  {
    name: "Samsung Galaxy S21",
    description: "Latest smartphone with 5G connectivity, 128GB storage, amazing camera",
    price: 35000,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500",
    category: "Mobile",
    stock: 25
  },
  {
    name: "Sony Headphones",
    description: "Wireless noise cancelling headphones with premium sound quality",
    price: 8500,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Audio",
    stock: 30
  },
  {
    name: "Apple Watch Series 7",
    description: "Smartwatch with fitness tracking, heart rate monitor, GPS",
    price: 42000,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500",
    category: "Wearables",
    stock: 20
  },
  {
    name: "Canon DSLR Camera",
    description: "Professional camera with 24MP sensor, 4K video recording",
    price: 55000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    category: "Camera",
    stock: 10
  },
  {
    name: "Gaming Mouse",
    description: "RGB gaming mouse with programmable buttons, high DPI",
    price: 2500,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    category: "Gaming",
    stock: 50
  },
  {
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with blue switches, perfect for gaming",
    price: 4500,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    category: "Gaming",
    stock: 40
  },
  {
    name: "iPad Pro",
    description: "Powerful tablet with M1 chip, 11-inch display, Apple Pencil support",
    price: 75000,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
    category: "Tablets",
    stock: 12
  }
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('MongoDB connected');
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    console.log('Sample products added successfully!');
    process.exit();
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
