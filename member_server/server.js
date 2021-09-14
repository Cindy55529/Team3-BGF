const express = require("express");

let app = express();

app.get("/",function(request,response,next){
    response.send("Hello~~")
})

app.listen(3005, ()=>{
    console.log("web server啟動囉!!")
})