class human {
  constructor(name, age, isFriendly) {
    this.name = name;
    this.age = age;
    this.isFriendly = isFriendly;
  }
}

const human0 = new human("ahmad", 22, true);
console.log(human0.name + " " + human0.age + " " + human0.isFriendly);
