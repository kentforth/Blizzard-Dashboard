const express = require("express");

const functions = require("../functions");

module.exports = function (io) {
  const heartstoneIO = io;
  let router = express.Router();

  router.get("/");

  heartstoneIO.on("connection", (socket) => {
    socket.on("disconnect", () => {
      clearInterval(totalGamesInterval);
    });

    const totalGamesInterval = setInterval(() => {
      const randomNumber = functions.generateRandomNumber(1, 5);
      socket.emit("heartStoneTotalGames", randomNumber);
    }, 200);
  });
  return router;
};
