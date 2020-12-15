const express = require("express");

const functions = require("../functions");

module.exports = function (io) {
  const heartstoneIO = io;
  let router = express.Router();

  router.get("/");

  heartstoneIO.on("connection", (socket) => {
    socket.on("disconnect", () => {
      clearInterval(totalGamesInterval);
      clearInterval(cardsTypeInterval);
      clearInterval(topDeckGamesInterval);
    });

    const totalGamesInterval = setInterval(() => {
      const randomNumber = functions.generateRandomNumber(1, 5);
      socket.emit("heartStoneTotalGames", randomNumber);
    }, 200);

    const cardsTypeInterval = setInterval(() => {
      let cardsType = [
        { min: 3, max: 7 },
        { min: 12, max: 15 },
        { min: 4, max: 8 },
        { min: 1, max: 3 },
      ];

      let newTypeCardsArray = functions.generateNumbersArray(cardsType, 1);

      socket.emit("cardsType", newTypeCardsArray);
    }, 2100);

    const topDeckGamesInterval = setInterval(() => {
      let cardsType = [
        { min: 630, max: 645 },
        { min: 1243, max: 1250 },
        { min: 658, max: 672 },
        { min: 1421, max: 1437 },
        { min: 870, max: 895 },
        { min: 1562, max: 1570 },
      ];

      let newtopDeckGamesArray = functions.generateNumbersArray(cardsType, 1);

      socket.emit("heartstoneTopDeckGames", newtopDeckGamesArray);
    }, 3400);
  });
  return router;
};
