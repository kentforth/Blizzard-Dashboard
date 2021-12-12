const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: ["*"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  })
);

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: ["*"], credentials: true },
});

server.listen(11050, function () {
  console.log("Server is listening on port 11050");
});

app.use(require("./routes/overwatch")(io));
app.use(require("./routes/starcraft")(io));
app.use(require("./routes/diablo")(io));
app.use(require("./routes/heartstone")(io));
app.use(require("./routes/wow")(io));
