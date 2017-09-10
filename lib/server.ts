export class server {

    constructor() {
    }

    register(ioserver: SocketIO.Server) {

        // handle connections
        ioserver.on('connection', function(socket: SocketIO.Socket) {
            console.log("socket connect");

            //handle disconnect
            socket.on('disconnect', function () {
                console.log("socket disconnect");

            });
        });
    }
}