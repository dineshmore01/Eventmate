require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/loginSystem')
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


// User Schema
const userSchema = new mongoose.Schema({
    fullName: String,
    rollNumber: String,
    phoneNumber: String,
    email: { type: String, unique: true },
    address: String,
    branch: String,
    division: String,
    role: String,
    password: String,
    clubName: { type: String, default: '' }
});

const User = mongoose.model('User', userSchema);

// Registration Endpoint
app.post('/register', async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if(existingUser) return res.status(400).send('Email already exists');

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            ...req.body,
            password: hashedPassword
        });

        await user.save();
        res.status(201).send('Registration successful');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Login Endpoint
app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(!user) return res.status(400).send('Invalid credentials');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).send('Invalid credentials');

        res.send({
            message: 'Login successful',
            role: user.role
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));