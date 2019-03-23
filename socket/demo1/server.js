const WebSocket = require('ws');

const wss = new WebSocket.Server({
    port: 8091
});

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('received %s', message);
    });
    ws.send('connection success');
});
console.log('server Listening on 8091')

return;
