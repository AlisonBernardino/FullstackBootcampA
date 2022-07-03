let currentValueWrapper = document.getElementById("currentValueSettings");
let currentValue = 0;

function subtractValue() {
  currentValue -= 2;
  currentValueWrapper.innerHTML = currentValue;
}

function incrementValue() {
  currentValue += 2;
  currentValueWrapper.innerHTML = currentValue;
}
