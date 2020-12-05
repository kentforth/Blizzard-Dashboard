const express = require("express");
const app = express();
server = app.listen(11050, function () {
  console.log("server is running on port 11050");
});

const io = require("socket.io")(server);

app.use(require("./routes/overwatch")(io));
app.use(require("./routes/starcraft")(io));
app.use(require("./routes/diablo")(io));
