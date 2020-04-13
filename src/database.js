const mongoose = require('mongoose');
const dbName = 'devChat4'
const URI = `mongodb://localhost/${dbName}`;
const connect = () => {return mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })};
connect()
.then(()=>{
    console.log(`Connections successful to ${dbName}`);
})
.catch((err)=>{
    console.log(`Error to connect db`);
    console.log(err.message)
})
module.exports = mongoose.connection;