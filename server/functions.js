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

function generateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

exports.generateArrayWithSpecificNumbers = function () {
  let myArray = [];
  let randomNumber1 = generateRandomNumber(90, 100);
  let randomNumber2 = generateRandomNumber(180, 200);
  let randomNumber3 = generateRandomNumber(432, 440);
  let randomNumber4 = generateRandomNumber(1130, 1138);
  let randomNumber5 = generateRandomNumber(568, 574);
  let randomNumber6 = generateRandomNumber(256, 270);
  let randomNumber7 = generateRandomNumber(423, 428);
  let randomNumber8 = generateRandomNumber(60, 67);
  let randomNumber9 = generateRandomNumber(823, 828);
  let randomNumber10 = generateRandomNumber(1110, 1118);
  myArray = [
    randomNumber1,
    randomNumber2,
    randomNumber3,
    randomNumber4,
    randomNumber5,
    randomNumber6,
    randomNumber7,
    randomNumber8,
    randomNumber9,
    randomNumber10,
  ];
  return myArray;
};
