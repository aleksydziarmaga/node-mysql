const express = require('express');
const mysql = require('mysql');

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

app = express();

app.listen(3333, () => {
    console.log('Server started on http://localhost:3333');
})