const PubSub = require("../helpers/pub_sub.js");

const PrimeChecker = function () {

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe("FormView:number-input", (event) => {
    const checkedNumber = this.numberIsPrime(event.detail);
    let result = undefined;
      if (checkedNumber === true){
        result = `Yes! It's a prime number.`
      } else {
        result = `No! It's not a prime number.`
      }
    PubSub.publish("PrimeChecker:numberChecked", result);
  })
};

PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

module.exports = PrimeChecker;
