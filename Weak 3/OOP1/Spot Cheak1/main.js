class animal {
  constructor(dog, paraplegic) {
    this.dog = dog;
    this.paraplegic = paraplegic;
  }
  izzat() {
    let dogg = function () {
      console.log(
        `the dog name is ${this.dog} and his paraplegic setution is ${this.paraplegic}`
      );
    };
  }
}

const dog = new animal("haski", true);
dog.dogg();
