const router = (pathname, handler, response) => {
  if (handler[pathname]) {
    handler[pathname](response);
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("Error 404: Page Not Found");
    response.end();
  }
};

module.exports = {
  route: router,
};
