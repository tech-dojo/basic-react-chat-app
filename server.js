
var express = require("express");
var app  = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(process.env.PORT, process.env.IP);
var io  =require('socket.io').listen(server);

io.sockets.on('connection',function(socket){
    console.log("Connected: %s",socket.id);
    
    socket.on('commentlist',(payload)=>{
        console.log(payload);
        console.log("recieved");
        this.emit('commentlist',payload);
        
        
    })
    
    
});
console.log("server running ar port : + "+process.env.PORT+ " And at ip : "+ process.env.IP);

