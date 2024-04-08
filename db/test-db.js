const sql = require('mysql2');

const con = sql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'studentdb'
    }
);

function getData() {
    con.query('select * from person', (err, rows, col) => {
        if (err) {
            console.log('Error fetching Data');
            console.log(err);
        }
        else {
            console.log(rows);
        }
    });
}

function saveData(n, a) {
    con.query(`insert into person(name, age) values(\'${n}\', ${a})`, (err, res) => {
        if (err) {
            console.log('Error saving Data');
            console.log(err);
        }
        else {
            console.log(res);
        }
    });
}

function createTable() {
    con.query('CREATE TABLE person ( name VARCHAR(100) ,  age INT)', (err, res) => {
        if (err) {
            console.log('Error creating Table');
            console.log(err);
        }
        else {
            console.log(res);
        }
    });
}

function createDatabase() {
    con.query('CREATE DATABASE studentdb;', (err, res) => {
        if (err) {
            console.log('Error creating DB');
            console.log(err);
        }
        else {
            console.log(res);
        }
    });
}

// createDatabase();
createTable();
saveData('Ramu', 23);
getData();