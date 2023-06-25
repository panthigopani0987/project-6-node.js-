const express = require('express');

const port = 9000;

const app = express();

const path = require('path');

const DB = require('./config/mongoose');

const CrudTbl = require('./models/Crudtbl');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.use('/', require('./routes'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log("Server is Start on Port :-" + port);
})   