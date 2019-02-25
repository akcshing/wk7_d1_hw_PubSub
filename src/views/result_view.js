const PubSub = require("../helpers/pub_sub.js");

const ResultView = function() {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe("PrimeChecker:numberChecked", (event) => {
    this.displayResult(event.detail);
  })
};

ResultView.prototype.displayResult = function (result) {

  const resultView = document.querySelector("#result");
  resultView.textContent = result
};

module.exports = ResultView;
