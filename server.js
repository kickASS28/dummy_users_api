const http = require("http");
const url = require("url");

const serverInitializer = (router, handler) => {
  const responseHandler = (request, response) => {
    const pathname = url.parse(request.url).pathname;
    router(pathname, handler, response);
  };

  http.createServer(responseHandler).listen(3000);

  console.log("Server Started on localhost port 3000");
};

module.exports = {
  startServer: serverInitializer,
};
