function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  const multiplesOfThree = collection.filter(num => num % 3 === 0);
  return multiplesOfThree;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const numUniqueInArray = collection.filter((num, index) => collection.indexOf(num) === index);
  return numUniqueInArray;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
