let maxNumber = 10000;

module.exports = function (io) {
  const overwatch = io.of("/overwatch");

  /*listen to events*/
  overwatch.on("connection", (socket) => {
    console.log("Overwatch is connected");

    socket.on("disconnect", () => {
      console.log("overwatch was disconnected");
    });

    socket.on("changeUsersNumber", (data) => {
      maxNumber = data;
    });

    setInterval(() => {
      socket.emit("newNumber", generateRandomNumber(5000, maxNumber));
    }, 2000);
  });
};

function generateRandomNumber(min, max) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  const dateTime = new Date().getTime();
  let item = {
    x: dateTime,
    y: number,
  };
  return item;
}
