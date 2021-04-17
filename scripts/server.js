const db = require('./firebase')

// db.collection('users').get().then(res=>{
//     res.forEach(element => {
//         console.log(element.id, element.data());        
//     });
// })

const path = require('path')
const express = require('express');
const http = require('http');

const expressServer = express();
const httpServer = http.createServer(expressServer);
const io = require('socket.io')(httpServer);

expressServer.use(express.json())

expressServer.get('/', (request, response) => {
    response.sendFile(path.join(path.dirname(__dirname), 'views', 'index.html'));
});

expressServer.post('/', (request, response) => {
    console.log(request.body);
})

io.on('connection', socket => {
    console.log('connection');
    socket.on('g', res=>{
        console.log(res);
    })
})



httpServer.listen(80)
