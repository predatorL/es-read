var app = require('http').createServer((req, res) => {
    fs.readFile(__dirname + '/index.html', function(err, data) {
        if (err) {
            res.writeHead(500)
            return res.end('Error loading index.html')
        }

        res.writeHead(200)
        res.end(data)
    })
})
var io = require('socket.io')(app)
var fs = require('fs')
var socketHandle = require('./socket-handle')

app.listen(7001)

io.on('connection', socketHandle)
