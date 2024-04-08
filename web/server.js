const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'html')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// 1. path
// 2. call back takes two arguments
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/Proverbs', (req, res) => {
    //path = combines all the strings as path
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'proverbs.txt'));
});

app.get('/Welcome/:name', (req, res) => {
    res.send('Hello Welcome ' + req.params.name);
});

app.get('/Greet', (req, res) => {
    res.send('Hello Welcome ' + req.query.name);
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
    // res.sendFile(path.join(__dirname, 'register-student.html'));
});

app.post('/register', (req, res) => {
    console.log(req.body);
    console.log(JSON.stringify(req.body));
    const { name, age } = req.body;

    fs.readFile(path.join(__dirname, 'students.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        if (!data) {
            data = '[]';
        }
        
        const students = JSON.parse(data);
        console.log(students);
        // Add new student
        students.push({ name, age });
        // Write updated data back to the file
        fs.writeFile(path.join(__dirname, 'students.json'), JSON.stringify(students, null, 2), err => {
            if (err) {
                console.error(err);
                return res.status(500).send('Internal Server Error');
            }
            res.redirect('/list');
        });
    });    

});

app.get('/list', (req, res) => {
    res.sendFile(path.join(__dirname, 'student-list.html'));
    // res.sendFile(path.join(__dirname, 'register-student.html'));
});

app.get('/data', (req, res) => {
    fs.readFile(path.join(__dirname, 'students.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        if (!data) {
            data = '[]';
        }
        const students = JSON.parse(data);
        res.json(students);
    });
});
