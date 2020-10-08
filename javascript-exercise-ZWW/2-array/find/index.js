export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const findPersonUnderTwenty = collection.find(persong => persong.age < 20 && persong.age > 10);
  return findPersonUnderTwenty.name;
}
