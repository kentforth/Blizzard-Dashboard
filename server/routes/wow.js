const express = require("express");

const functions = require("../functions");

module.exports = function (io) {
  const wowIO = io;
  let router = express.Router();

  router.get("/");

  let euRealm = [
    { min: 9.6, max: 10 },
    { min: 9, max: 9.5 },
    { min: 9, max: 9.9 },
    { min: 9.1, max: 9.9 },
    { min: 8.4, max: 8.9 },
    { min: 8.1, max: 8.4 },
    { min: 8.2, max: 8.5 },
    { min: 7.2, max: 7.9 },
    { min: 7.1, max: 7.6 },
    { min: 6.3, max: 6.7 },
    { min: 5.2, max: 5.6 },
    { min: 5.1, max: 5.8 },
  ];

  let usRealm = [
    { min: 10.4, max: 11 },
    { min: 9, max: 9.7 },
    { min: 9.2, max: 9.7 },
    { min: 9.4, max: 9.8 },
    { min: 8.3, max: 8.8 },
    { min: 8.0, max: 8.7 },
    { min: 8.2, max: 8.6 },
    { min: 7.2, max: 7.5 },
    { min: 7.1, max: 7.4 },
    { min: 6.3, max: 6.8 },
    { min: 5.1, max: 5.8 },
    { min: 5.2, max: 5.6 },
  ];

  let playersRatings = [
    { min: 2488, max: 2500 },
    { min: 2100, max: 2300 },
    { min: 2250, max: 2458 },
    { min: 1800, max: 2492 },
    { min: 2200, max: 2462 },
    { min: 1954, max: 2479 },
    { min: 1840, max: 2489 },
    { min: 2240, max: 2500 },
    { min: 2100, max: 2377 },
    { min: 1965, max: 2500 },
  ];

  wowIO.on("connection", (socket) => {
    socket.on("disconnect", () => {
      clearInterval(characterDistributionInterval);
      clearInterval(topPlayersRatingInterval);
    });

    const characterDistributionInterval = setInterval(() => {
      let ueRealmArray = functions.generateFloatNumbersArray(euRealm, 1);
      let usRealmArray = functions.generateFloatNumbersArray(usRealm, 1);

      let allRealmArray = [ueRealmArray, usRealmArray];

      socket.emit("wowCharacterDistribution", allRealmArray);
    }, 3000);

    const topPlayersRatingInterval = setInterval(() => {
      let ueRealmArray = functions.generateNumbersArray(playersRatings, 1);
      socket.emit("wowTopPlayersRating", ueRealmArray);
    }, 2300);
  });
  return router;
};
