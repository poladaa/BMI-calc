"use strict";
const btn = document.querySelector(".btn");
const info = document.getElementById("weight-condition");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const result = document.getElementById("result");

function calcBMI() {
  const weightValue = weight.value;
  const heightValue = height.value / 100;

  const bmiValue = +weightValue / (heightValue * heightValue);

  result.value = bmiValue.toFixed(3);

  if (bmiValue < 18.5) {
    info.textContent = "Under Weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.5) {
    info.textContent = "Normal Weight";
  } else {
    info.textContent = "OverWeight";
  }
}

btn.addEventListener("click", calcBMI);
