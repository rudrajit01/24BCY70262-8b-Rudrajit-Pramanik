const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // body-parser এর替代

const SECRET_KEY = 'your_secret_key_here';
// রুট পাথ হ্যান্ডলার
app.get('/', (req, res) => {
  res.send('JWT Protected Routes Server is running. Use POST /api/login to authenticate and GET /api/protected for protected data.');
});

// লগইন এন্ডপয়েন্ট - পাসওয়ার্ড 'testpass' ব্যবহার করুন
app.post('/api/login', (req, res) => {
  console.log('Request body:', req.body);
  const { username, password } = req.body;
  
  if (username === 'test' && password === 'testpass') {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    return res.json({ success: true, token });
  }
  return res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// JWT ভেরিফিকেশন মিডলওয়্যার
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ success: false, message: 'No token provided' });
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: 'Invalid token' });
  }
}

// প্রটেক্টেড এন্ডপয়েন্ট
app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ success: true, message: `Hello ${req.user.username}, you have accessed protected data!` });
});

app.listen(5000, () => console.log('Server running on port 5000'));
