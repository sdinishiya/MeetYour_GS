const express = require("express");
const app = express();
const bodyParser =  require('body-parser')
const cors = require("cors");
const path = require('path');

// const { response } = require('express');
// const ejs = require ('ejs');
// const socketio = require('socket.io')
// const path = require('path');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const mysql = require("mysql");
const config = require('./DB.js');

const GRNRoute = require('./routes/GRN.route');



const app = express();
app.use(express.json());
app.use(cors());


app.use('/newProduct',productRoute);
app.use('/Batch',batchRoute);









































app.listen(3001, () => {
	console.log("running on port 3001");
});