"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server = /** @class */ (function () {
    function server() {
    }
    server.prototype.register = function (ioserver) {
        // handle connections
        ioserver.on('connection', function (socket) {
            console.log("socket connect");
            //handle disconnect
            socket.on('disconnect', function () {
                console.log("socket disconnect");
            });
        });
    };
    return server;
}());
exports.server = server;
//# sourceMappingURL=server.js.map