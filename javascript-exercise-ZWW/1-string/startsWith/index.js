export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  const carNumStartWithYueA = collection.filter(carNum => carNum.startsWith('粤A'));
  return carNumStartWithYueA.length;
}
