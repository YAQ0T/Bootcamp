const letters = ["H", "E", "S", "G", "L", "Y", "I"];
//E G H I L S Y

class BSNode {
  constructor(value) {
    this.value = value;
    this.rightChild = null;
    this.leftChild = null;
  }
  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal;
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal);
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal);
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal);
    } else {
      this.rightChild = new BSNode(newVal);
    }
  }
  findNode(val) {
    let temp = this;
    let count = 0;
    while (count < letters.length - 1) {
      count++;
      if (temp.value == val) return true;
      if (val > temp.value && temp.rightChild) {
        temp = temp.rightChild;
      }
      if (val < temp.value && temp.leftChild) {
        temp = temp.leftChild;
      }
    }
    return false;
  }
}

let node = new BSNode(letters[0]);
for (let i = 1; i < letters.length; i++) {
  node.insertNode(letters[i]);
}
console.log(node);
console.log(node.rightChild);
console.log(node.leftChild);
console.log(node.findNode("K"));
