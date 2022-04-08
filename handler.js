var fs = require("fs");
const userData = require("./data");
const home = (response) => {
  response.writeHeader(200, { "Content-Type": "text/html" });
  response.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        box-sizing: border-box;
        background-color: black;
        color: white;
        text-align: center;
        height: 100vh;
      }

      body h1 {
        margin-top: 3rem;
      }

      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50%;
        flex-direction: column;
      }
    </style>
    <title>Dummy users API</title>
  </head>
  <body>
    <h1>Dummy Users API</h1>
    <div class="container">
      <h3>Hit below URL to get response users</h3>
      <a href="${__dirname}/users">Generate Users</a>
    </div>
  </body>
</html>
`);
  response.end();
};

const users = (response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.write(JSON.stringify(userData.DUMMY_USERS, null, 2));
  response.end();
};

module.exports = {
  "/": home,
  "/home": home,
  "/users": users,
};
