const app = require("./app");
const db = require("./database");
const port = 4000 || 5000 || 6000
const main = async()=>{
    await app.listen(port,()=>{
        console.log(`Server listen at port ${port}`);
    });
}

main();