// TODO 11: 在这里写实现代码
import Person from './person';

class Student extends Person {
  constructor(name, age, classNum) {
    super(name, age);
    this.klass = classNum;
  }

  introduce() {
    return `I am a Student. I am at Class ${this.klass}.`;
  }
}

export default Student;
