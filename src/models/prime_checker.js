const PubSub = require("../helpers/pub_sub.js");

const PrimeChecker = function () {

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe("FormView:number-input", (event) => {
    const checkedNumber = this.numberIsPrime(event.detail);
    console.log(checkedNumber);
    PubSub.publish("PrimeChecker:numberChecked", checkedNumber);
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
