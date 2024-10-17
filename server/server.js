const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./db');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// JWT Secret
const JWT_SECRET = 'magicword';

// FreeLesson Route
app.post('/freelesson', async (req, res) => {
  console.log('Request Body:', req.body);
  const { name, phone, city, email } = req.body;
  if (!name || !phone || !city || !email) {
    return res.status(400).send('Please fill out the form');
  }

  try {
    await pool.query(
      'INSERT INTO freelessons (name, phone, city, email) VALUES ($1, $2, $3, $4)',
      [name, phone, city, email]
    );
    res.status(201).send('Free lesson request submitted');
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).send('Server error');
  }
});

// User Registration Route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Please fill out all fields');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2)',
      [username, hashedPassword]
    );
    res.status(201).send('User registered');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// User Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Please fill out all fields');
  }

  try {
    const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (user.rows.length === 0) {
      return res.status(400).send('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }

    const token = jwt.sign({ id: user.rows[0].id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Protected Route Example
app.get('/dashboard', (req, res) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    res.send('Welcome to the dashboard!');
  } catch (err) {
    res.status(400).send('Invalid token');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
