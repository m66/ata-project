const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const { encrypt } = require('./EncryptionHandler');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ata_db'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

// GET ALL DATA
app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM register"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

// REGISTER
app.post('/register', (req, res) => {

    const {companyName, name, address, numberEmail, companyType, password} = req.body;
    const hashedPassword = encrypt(password);

    const sqlInsert = "INSERT INTO register (companyName, name, address, numberEmail, companyType, password, iv) VALUES (?, ?, ?, ?, ?, ?, ?)"
    db.query(sqlInsert, [companyName, name, address, numberEmail, companyType, hashedPassword.password, hashedPassword.iv], (err, result) => {
        console.log('Register is successful')
    })
})

// LOGIN
app.post('/login', (req, res) => {
    const {numberEmail, password} = req.body;    
    const sqlInsert = "SELECT * FROM register WHERE numberEmail = ?";

    db.query(sqlInsert, [ numberEmail ], (err, results) => {
        if(err) {
            res.send({err: err})
        } else if(results.length > 0) {
            const { iv, password: hashedPassword } = encrypt(password, results[0].iv);
            if (hashedPassword === results[0].password) {
                res.send(results);
                // res.sendFile(path.resolve('./index.html'))
            } else {
                res.send({ message: 'Wrong userName/password combination' });
            }
        }
    })
    })

app.get('/getPassword', (req, res) => {
    db.query('SELECT * FROM register', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
})

// ======= LOGIN END =====

app.listen(3001, () => {
    console.log('Server running on port 3001');
});