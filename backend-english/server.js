const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express(); // Create an Express application
app.use(cors()); // Enable CORS for all routes

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: '123456',
    database: 'english_learning'
});

db.connect(err => {
    if (err) throw err; 
    console.log('Connected to the database!');
});

app.get('/api/paragraphs', (req, res) => {
    const sql = 'SELECT * FROM paragraphs';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});