const mongoose = require('mongoose');
const dbName = 'devChat4'
const URI = `mongod://localhost/${dbName}`;
const connect = () => {return mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })};
connect()
.then(()=>{
    console.log(`Connections successful to ${dbName}`);
})
.catch((err)=>{
    console.log(`Error to connect db`);
})
module.exports = mongoose.connection;