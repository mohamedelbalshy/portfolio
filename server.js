const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


var config = require('./config/secret');
const Message = require('./models/message');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/message', (req, res, next)=>{
    
    var message = new Message()
    message.name = req.body.name
    message.email = req.body.email
    message.body = req.body.message
    message.save((err, result)=>{
        if(err) return;
        else{
            console.log(result);
        }
        
    })
})

app.use(express.static('public'));  
app.listen(3000, ()=> {
    console.log('Server is Running on Port 3000' );
})
