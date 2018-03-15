const socketIo = require('socket.io')

class InitSocket {
    constructor() {
        this.guestNumber = 1
        this.io = null
        this.nickNames = {}
        this.namesUsed = []
        this.currRoom = {}
    }

    handleConnection(socket) {
        console.log('a user connected')
    }

    listen(server) {
        this.io = socketIo(server)
        this.io.on('connection', this.handleConnection)
    }
}

module.exports = function() {
    const temp = new InitSocket()
    return temp
}

// let io = null
// let guestNumber = 1
// const nickNames = {}
// const namesUsed = []
// const currentRoom = {}

// const assignGuestName = (socket, guestNumber, nickNames, namesUsed) => {
//     const name = 'Guest' + guestNumber
//     nickNames[socket.id] = name
//     socket.emit('nameResult', {
//         success: true,
//         name
//     })
//     namesUsed.push(name)
//     return guestNumber + 1
// }

// const joinRoom = (socket, room) => {
//     socket.join(room)
//     currentRoom[socket.id] = room
//     socket.emit('joinResult', {room})
//     socket.broadcast.to(room).emit('message', {
//         text: [nickNames[socket.id],' has joined ', room, ' .'].join('')
//     })
//     const usersInRoom = io.sockets.cilents(room)
//     if(usersInRoom.length > 1) {
//         let usersInRoomSummary = ['Users cuurently in', room, ':']
//         for(let index in usersInRoom) {
//             const userSocketId = usersInRoom[index].id
//             if(userSocketId != socket.id) {
//                 if(index > 0) {
//                     usersInRoomSummary.push(', ')
//                 }
//                 usersInRoomSummary.push(nickNames[userSocketId])
//             }
//         }
//         usersInRoomSummary.push('.')
//         socket.emit('message', {text: usersInRoomSummary.join('')})
//     }
// }

// const handleNameChangeAttempts = (socket, nickNames, namesUsed) => {
//     socket.on('nameAttempt', (name) => {
//         if(name.indexOf('Guest') === 0) {
//             socket.emit('nameResult', {
//                 success: false,
//                 message: '名称不能以Guest开头'
//             })
//             return
//         }
//         if(namesUsed.indexOf(name) === -1) {
//             const previousName = nickNames[socket.id]
//             const previousNameIndex = namesUsed.indexOf(previousName)
//             namesUsed.push(name)
//             nickNames[socket.id] = name
//             delete namesUsed[previousNameIndex]
//             socket.emit('nameResult', {
//                 success: true,
//                 name
//             })
//             socket.broadcast.to(currentRoom[socket.id]).eimt('message', {
//                 text: previousName + ' is now known as ' + name + '.'
//             })
//             return
//         }
//         socket.emit('nameResult', {
//             success: false,
//             message: 'That name is already in use.'
//         })
//     })
// }

// const handleMessageBroadcasting = (socket) => {
//     socket.on('message', (message) => {
//         socket.broadcast.to(message.room).emit('message', {
//             text: nickNames[socket.id] + ': ' + message.text
//         })
//     })
// }

// const handleRoomJoining = (socket) => {
//     socket.on('join', (room) => {
//         socket.leave(currentRoom[socket.id])
//         joinRoom(socket, room.newRoom)
//     })
// }

// const handleCilentDisconnection = (socket) => {
//     socket.on('disconnect', () => {
//         const nameIndex = namesUsed.indexOf(nickNames[socket.id])
//         delete namesUsed[nameIndex]
//         delete nickNames[socket.id]
//     })
// }

// const handleConnection = socket => {
//     guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed)
//     joinRoom(socket, 'Lobby')
//     handleMessageBroadcasting(socket, nickNames)
//     handleNameChangeAttempts(socket, nickNames, namesUsed)
//     handleRoomJoining(socket)
//     socket.on('rooms', () => {
//         socket.emit('rooms', io.sockets.manageer.rooms)
//     })
// }

// module.exports = listen
