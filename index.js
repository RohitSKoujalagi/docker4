const express=require('express')
const app=express();

app.get("/",(req,res)=>{
console.log("GET from prog2");

res.send("Hello from PROGRAM 2");

})


app.listen(4000,()=>{

console.log("Listening ...")

})
