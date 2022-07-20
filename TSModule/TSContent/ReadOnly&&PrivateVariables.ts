// "Read-only" && "Private" variables

interface Worker {
  name: string;
  age: number;
  currentWork?: string;
}

type readOnlyWorker = {
  +readonly // "?-" = Removes the optional properties
  [key in keyof Worker]-?: Worker[key];
};

class workerRegister implements Worker {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const registeredWorker01 = new workerRegister('Terry', 35);
registeredWorker01.name = 'Austin';

console.log(registeredWorker01);
