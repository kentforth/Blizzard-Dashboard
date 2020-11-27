exports.generateRandomUsers = function (min, max) {
  min = max - 300;
  let number = Math.floor(Math.random() * (max - min + 1) + min);

  const dateTime = new Date().getTime();
  let item = {
    x: dateTime,
    y: number,
  };
  return item;
};

exports.generateRandomArray = function (min, max, arrayLength) {
  let randoms = Array.from({ length: arrayLength }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
  return randoms;
};

exports.generateArmyUnits = function (armyOne, armyTwo, armyThree) {
  let armyArray = [armyOne, armyTwo, armyThree];
  return armyArray;
};
