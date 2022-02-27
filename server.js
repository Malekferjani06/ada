// Importation

const express = require("express");

const path=require('path')
// creation de l'insatnce

const app = express();
const work=require("./middleware/Auth")
app.use(work)




// creation server
const port = 5000;
app.listen(port, (error) => {
  error ? console.log("error") : console.log(`this sit work on ${port}`);
});


// express Route

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/Home.html"))
})