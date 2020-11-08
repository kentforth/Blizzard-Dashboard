let maxNumber = 10000;

module.exports = function (io) {
  const overwatch = io.of("/overwatch");

  /*listen to events*/
  overwatch.on("connection", (socket) => {
    let previosUsersNumber = 5000;

    console.log("Overwatch is connected");

    socket.on("disconnect", () => {
      console.log("overwatch was disconnected");
      clearInterval(usersInterval);
    });

    socket.on("changeUsersNumber", (data) => {
      maxNumber = data;
    });

    const usersInterval = setInterval(() => {
      socket.emit("newNumber", generateRandomNumber(5000, maxNumber));
    }, 2000);

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
