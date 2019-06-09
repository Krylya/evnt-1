export default class RandomNumber {
  constructor(maxNum) {
    this.lastNum = null;
    this.maxNum = maxNum;
  }

  generateNumber() {
    const num = Math.floor(Math.random() * (this.maxNum));
    if (num === this.lastNum) {
      this.generateNumber();
    }

    this.lastNum = num;
    return num;
  }
}
