const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 4000;

const allowedOrigins = [
  'http://localhost:5173',
  'https://architechx.netlify.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));


// Use only express.json() and express.urlencoded()
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const routes = require("./routes/auth.routes.js");
app.use('/api/v1', routes);

// DB connection
const { connectDB } = require('./config');
connectDB();

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
