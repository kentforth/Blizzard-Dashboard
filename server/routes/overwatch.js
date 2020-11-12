let maxNumber = 10000;

module.exports = function (io) {
  const overwatch = io.of("/overwatch");

  /*listen to events*/
  overwatch.on("connection", (socket) => {
    console.log(`Overwatch ${socket.id} is connected`);

    socket.on("disconnect", () => {
      console.log(`overwatch ${socket.id} was disconnected`);
      clearInterval(usersInterval);
      clearInterval(teaWinRates);
      clearInterval(usersChoiceTanks);
      clearInterval(usersChoiceDPS);
      clearInterval(usersChoiceHealers);
    });

    socket.on("changeUsersNumber", (data) => {
      maxNumber = data;
    });

    /*generate users number*/
    const usersInterval = setInterval(() => {
      socket.emit("newNumber", generateRandomNumber(5000, maxNumber));
    }, 2000);

    /*generate team win rates*/
    const teaWinRates = setInterval(() => {
      socket.emit("teamWinRate", generateNumberArray(20, 60, 10));
    }, 3000);

    /*generate users choice tanks number*/
    const usersChoiceTanks = setInterval(() => {
      socket.emit("usersChoiceTanks", generateNumberArray(10, 80, 8));
    }, 2500);

    /*generate users choice dps number*/
    const usersChoiceDPS = setInterval(() => {
      socket.emit("usersChoiceDPS", generateNumberArray(7, 90, 17));
    }, 3000);

    /*generate users choice dps number*/
    const usersChoiceHealers = setInterval(() => {
      socket.emit("usersChoiceHealers", generateNumberArray(7, 90, 17));
    }, 2200);

    function generateNumberArray(min, max, arrayLength) {
      let randoms = Array.from({ length: arrayLength }, () =>
        Math.floor(Math.random() * (max - min + 1) + min)
      );
      return randoms;
    }

    function generateRandomNumber(min, max) {
      min = max - 300;
      let number = Math.floor(Math.random() * (max - min + 1) + min);

      const dateTime = new Date().getTime();
      let item = {
        x: dateTime,
        y: number,
      };
      return item;
    }
  });
};
