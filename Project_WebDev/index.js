const express = require('express');
const bodyParser =require('body-parser');
const session = require('express-session');
const layouts = require('express-ejs-layouts');

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded());
app.use(express.static("public"));

app.use(session({
    secret: 'some_secret_key',
    cookie: {}
}));


const index= require('./routes/index');


app.use('/',index)

app.listen('3000',()=>{
    console.log('Server sudah bejalan di port 3000')
})