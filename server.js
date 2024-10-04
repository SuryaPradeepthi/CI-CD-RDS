const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: 'ci-cd.c9ak4yskapxr.us-east-1.rds.amazonaws.com',
    user: 'suryapradeepthi',
    password: 'Pradeepthi9846',
    database: 'ci-cd'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    res.send('App running on ECS Fargate with RDS!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});