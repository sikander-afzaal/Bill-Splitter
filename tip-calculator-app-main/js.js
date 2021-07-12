const bill = document.querySelector("#bill");
const tip = document.querySelectorAll(".percentage");
const custom = document.querySelector(".percentage__input");
const people = document.querySelector("#people");
const tip__display = document.querySelector("#tip__amount");
const total = document.querySelector("#total");
const reset = document.querySelector(".reset");
var value = 0;
var number = 0;
var percentage__tip = 0;
console.log(bill);
///////////////////////////////////////////////////
bill.addEventListener("input", (e) => {
  value = parseInt(e.target.value);
  if (value < 0 || !Boolean(value)) {
    bill.style.border = "2px solid red";
    value = 0;
    document.querySelector(".error__bill").style.display = "block";
  } else {
    bill.style.border = "2px solid hsl(172, 67%, 45%)";
    document.querySelector(".error__bill").style.display = "none";
    tipAmount();
    totalF();
    resetF();
  }
  console.log(bill.value);
});
///////////////////////////////////////////////////

people.addEventListener("input", (e) => {
  number = parseInt(e.target.value);
  if (number <= 0 || !Boolean(number)) {
    people.style.border = "2px solid red";
    number = 0;
    document.querySelector(".error__person").style.display = "block";
  } else {
    people.style.border = "2px solid hsl(172, 67%, 45%)";
    document.querySelector(".error__person").style.display = "none";
    tipAmount();
    totalF();
    resetF();
  }
  console.log(number);
  tipAmount();
  resetF();
  totalF();
});
///////////////////////////////////////////////////

document.querySelector(".buttons").addEventListener("click", (e) => {
  const button = e.target.closest(".percentage");
  if (button) {
    tip.forEach((val) => {
      val.classList.remove("active");
    });
  }
  button.classList.add("active");
  percentage__tip = parseInt(button.innerText);
  tipAmount();
  resetF();
  totalF();
});
///////////////////////////////////////////////////

custom.addEventListener("input", (e) => {
  tip.forEach((val) => {
    val.classList.remove("active");
  });
  percentage__tip = parseInt(e.target.value);
  console.log("custom" + percentage__tip);
  tipAmount();
  resetF();
  totalF();
});
///////////////////////////////////////////////////

const tipAmount = () => {
  const tip_person = ((value * (percentage__tip / 100)) / number).toFixed(2);
  console.log(tip_person);
  tip__display.innerText = `$${tip_person}`;
};
///////////////////////////////////////////////////

const totalF = () => {
  var total_person = (
    (value + value * (percentage__tip / 100)) /
    number
  ).toFixed(2);
  total.innerText = `$${total_person}`;
};
///////////////////////////////////////////////////

const resetF = () => {
  if (value <= 0 && percentage__tip <= 0 && number <= 0) {
    reset.classList.add("disabled");
  } else {
    reset.classList.remove("disabled");
  }
  if (!reset.classList.contains("disabled")) {
    reset.addEventListener("click", () => {
      value = 0;
      percentage__tip = 0;
      number = 0;
      total.innerText = `$0.00`;
      tip__display.innerText = `$0.00`;
      reset.classList.add("disabled");
      bill.value = 0;
      people.value = 0;
      tip.forEach((val) => {
        val.classList.remove("active");
      });
    });
  }
};
///////////////////////////////////////////////////
