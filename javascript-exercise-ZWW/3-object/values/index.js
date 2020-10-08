export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  const valueOfType = Object.values(source);
  const valueTotal = valueOfType.map(str => Number(str)).reduce((num1, num2) => num1 + num2);
  return valueTotal;
}
