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

exports.generateRandomNumber = function (min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

exports.generateRandomFloatNumber = function (min, max) {
  let randomNumber = Math.random() * (max - min) + min;
  return randomNumber;
};

exports.generateArrayWithSpecificNumbers = function () {
  let myArray = [];
  let randomNumber1 = this.generateRandomNumber(90, 100);
  let randomNumber2 = this.generateRandomNumber(180, 200);
  let randomNumber3 = this.generateRandomNumber(432, 440);
  let randomNumber4 = this.generateRandomNumber(1130, 1138);
  let randomNumber5 = this.generateRandomNumber(568, 574);
  let randomNumber6 = this.generateRandomNumber(256, 270);
  let randomNumber7 = this.generateRandomNumber(423, 428);
  let randomNumber8 = this.generateRandomNumber(60, 67);
  let randomNumber9 = this.generateRandomNumber(823, 828);
  let randomNumber10 = this.generateRandomNumber(1110, 1118);
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

exports.generateFloatNumbersArray = function (numberArray, fractionDigit) {
  let newArray = [];
  let number = null;

  for (let numberObject of numberArray) {
    number = parseFloat(
      this.generateRandomFloatNumber(
        numberObject.min,
        numberObject.max
      ).toFixed(fractionDigit)
    );
    newArray.push(number);
  }
  return newArray;
};
