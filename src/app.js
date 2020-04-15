const express = require('express');
const cors = require('cors');

const app = express();

//Middelware
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use(cors());

app.use("/api/chats",require('./routes/chats'));
app.use("/api/users",require('./routes/users'));
app.use("/api/mensajes",require('./routes/mensajes'));

module.exports = app;