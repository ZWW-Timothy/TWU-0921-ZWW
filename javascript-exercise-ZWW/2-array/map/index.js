export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const arraystart = 'a';
  const mapResult = collection.map(num => String.fromCharCode(arraystart.charCodeAt() + num - 1));
  return mapResult;
}
