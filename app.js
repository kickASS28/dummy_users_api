const server = require("./server");
const router = require("./router");
const handler = require("./handler");
server.startServer(router.route, handler);
