const express = require("express");
const app = express()
const PORT = process.env.PORT || 5000;


app.get("/profile" , (req,res)=>{
    res.send("GET PROFILE")
})


app.post("/profile" , (req,res)=>{
    res.send("Post PROFILE")
})

app.put("/profile" , (req,res)=>{
    res.send("UPDATE PROFILE")
})

app.delete("/profile" , (req,res)=>{
    res.send("delete PROFILE")
})



app.listen(PORT , ()=>console.log(`Server is running on localhost:${PORT}`))