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
      socket.emit("teamWinRate", generateWinRate(20, 60));
    }, 3000);

    function generateWinRate(min, max) {
      let randoms = Array.from({ length: 10 }, () =>
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
