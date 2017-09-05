const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

//Create conection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_db' 
});

db.connect((err) => {
    if (err) {
        console.log('Error connetcting to db:', err);
        return;
    }
    console.log('Connection established')
});

const app = express();

app.use(bodyParser.json());

//Create endpoints to GET all users and save user
app.route('/users')
    .get((req, res) => {
        const sql = 'SELECT * FROM USERS';
        db.query(sql, (err, result) => {
            if(err) 
                res.send(err);
            else {
                res.status(200).json(result);
            }
        })
    })
    .post((req, res) => {
        const user = req.body;
        console.log(user);
        const sql = 'INSERT INTO users SET ?';
        db.query(sql, user, (err, result) => {
            if(err) 
                res.send(err);
            else {
                res.status(201).send('Add user');
            }
        })
    })
app.route('/users')
    .get((req, res) => {
        const sql = 'SELECT * FROM users';
        db.query(sql, (err, result) => {
            if(err) 
                res.send(err);
            else {
                res.status(200).json(result);
            }
        })
    })
    .post((req, res) => {
        const user = req.body;
        const sql = 'INSERT INTO users SET ?';
        db.query(sql, user, (err, result) => {
            if(err) 
                res.send(err);
            else {
                res.status(201).send('Add user');
            }
        })
    })
app.route('/posts')
    .get((req, res) => {
        const sql = 'SELECT * FROM posts';
        db.query(sql, (err, result) => {
            if(err) 
                res.send(err);
            else {
                res.status(200).json(result);
            }
        })
    })
    .post((req, res) => {
        const user = req.body;
        const sql = 'INSERT INTO posts SET ?';
        db.query(sql, user, (err, result) => {
            if(err) 
                res.send(err);
            else {
                res.status(201).send('Add post');
            }
        })
    })
app.route('/posts')
    .get((req, res) => {
        const sql = 'SELECT * FROM topics';
        db.query(sql, (err, result) => {
            if(err) 
                res.send(err);
            else {
                res.status(200).json(result);
            }
        })
    })
    .post((req, res) => {
        const user = req.body;
        const sql = 'INSERT INTO topics SET ?';
        db.query(sql, user, (err, result) => {
            if(err) 
                res.send(err);
            else {
                res.status(201).send('Add post');
            }
        })
    })
app.listen(3333, () => {
    console.log('Server started on http://localhost:3333');
})