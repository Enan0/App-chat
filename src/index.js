const app = require("./app");

const main = async()=>{
    await app.listen(4004)
    app.once("on",()=>{
        console.log("Server start at port 4004")
    })
}