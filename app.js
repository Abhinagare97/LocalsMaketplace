const mongoose = require('mongoose');
const express = require('express');
const app = express();
mongoose.connect('mongodb://localhost:27017/localsmarketplace');

main()
.then(res=>console.log("conn successful"))
.catch(err=>console.log(err))

async function main(){
    mongoose.connect('mongodb://localhost:27017/localsmarketplace');

}

app.get("/" ,(req,res)=>{
    res.send("working");
})

app.get("/home", (req, res)=>{
    res.send("")
})



const port = 3000;
app.listen(port,()=>{
    console.log("app is listening");

})