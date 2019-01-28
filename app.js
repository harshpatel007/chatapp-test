const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

//set the template engine ejs
app.set('view engine', 'ejs')

//middlewares
app.use(express.static('public'))


//routes
app.get('/', (req, res) => {
    res.render('index')
})

//Listen on port
server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`))



//socket.io instantiation
const io = require("socket.io")(server)


//listen on every connection
io.on('connection', (socket) => {
    console.log('New user connected')

    //listen on new_message
    socket.on('new_message', (data) => {
        console.log("new_message", data);
        //broadcast the new message
        io.sockets.emit('new_message', {
            message: data.message
        });

        io.sockets.emit('new_message_server', {
            //here there can be call to api
            message: data.message.split(' ').length
        });
    })
})