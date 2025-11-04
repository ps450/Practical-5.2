const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json()); // parse JSON bodies

// Connect to MongoDB (local)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/studentdb';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/students', studentRoutes);
app.get('/', (req, res) => res.send('Student Management System API'));

// Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
