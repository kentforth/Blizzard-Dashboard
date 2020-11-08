const express = require("express");
const app = express();
routes = require("./routes/overwatch");
server = app.listen(11050, function () {
  console.log("server is running on port 11050");
});

const io = require("socket.io")(server);

require("./routes/overwatch")(io);
