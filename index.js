const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

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
app.use(cors());

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
app.get('/user/:userId', (req, res) => {
    const {userId} = req.params;
    const sql = 'SELECT * FROM USERS WHERE id = ' +  db.escape(userId);
    db.query(sql, (err, result) => {
        if(err) 
            res.send(err);
        else {
            res.status(200).json(result[0]);
        }
    })
})
app.get('/user/:userId/posts', (req, res) => {
    const {userId} = req.params;
    const sql = 'SELECT p.* FROM posts p JOIN users u ON u.id = p.user_id WHERE user_id = ' +  db.escape(userId);
    db.query(sql, (err, result) => {
        if(err) 
            res.send(err);
        else {
            res.status(200).json(result);
        }
    })
})
app.get('/user/:userId/topics', (req, res) => {
    const {userId} = req.params;
    const sql = 'SELECT t.* FROM topics t JOIN users u ON u.id = t.user_id WHERE user_id = ' +  db.escape(userId);
    db.query(sql, (err, result) => {
            if(err) 
                res.send(err);
            else {
                res.status(200).json(result);
            }
        })
})
// endpoints, for managing posts data
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
// endpoints, for managing topics data
app.route('/topics')
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
                res.status(201).send('Add topic');
            }
        })
    })
app.get('/topic/:topicId/posts', (req, res) => {
    const {topicId} = req.params;
    const sql = 'SELECT p.* FROM posts p JOIN topics t ON t.id = p.topic_id WHERE topic_id = ' +  db.escape(topicId);
    db.query(sql, (err, result) => {
            if(err) 
                res.send(err);
            else {
                res.status(200).json(result);
            }
        })
})
app.listen(3333, () => {
    console.log('Server started on http://localhost:3333');
})