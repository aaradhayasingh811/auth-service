const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
    origin: 'https://architechx.netlify.app' || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    withCredentials: true,
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
