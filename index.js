const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const UserModel = require('./model/users');

require('dotenv').config();

const app = express();


const cors = require('cors');


app.use(cors())



app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

// app.get('/users', (req,res,send) => {
//     UserModel.find({}).then(result => {
//         console.log(result)
//         return res.render('users', { result });
//     })
// })

app.get('/users', (req,res,send) => {
    UserModel.find({}).then(result => {
        return res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        return res.status(500).send('something went wrong');
    })
})

app.get('/', (req,res,send) => {
    
        return res.render('welcome');
    
})

const db_url= process.env.DB_URL;
console.log(db_url);




mongoose.connect(db_url, () => {
    app.listen(process.env.PORT || 3333, () => {
        console.log('Server started!!');
    })
});



const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});








