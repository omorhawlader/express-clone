const Micro = require("./micro");

const micro = new Micro();

micro.get('/',(req,res)=>{
    res.end("<h1>My name is Omar</h1>")
})

micro.listen(4000,()=>console.log("server is runing on port number: http://localhost:4000"))