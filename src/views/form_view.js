const PubSub = require("../helpers/pub_sub.js");

const FormView = function (){

};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector("#prime-checker-form");
  form.addEventListener("submit", (event) => {

    event.preventDefault();

    const numberInput = event.target.number.value;
    // console.log(numberInput);

    PubSub.publish("FormView:number-input", numberInput);
  })
};

module.exports = FormView;
