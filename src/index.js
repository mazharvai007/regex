import "./styles.css";

let colorValue = document.querySelector(".colorValue");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");

colorValue.addEventListener("keyup", (e) => {
  e.preventDefault();
  let value = colorValue.value;

  // #FFEE00 or #FE0
  let regx = /#([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})/i;

  if (value.length === 4 || value.length === 7) {
    let output = regx.exec(value);

    if (output === null) {
      return (red.innerHTML = "Not a valid color");
    } else {
      red.innerHTML = `Red: ${getColorValue(output[1])}`;
      green.innerHTML = `Green: ${getColorValue(output[2])}`;
      blue.innerHTML = `Blue: ${getColorValue(output[3])}`;
    }
  } else {
    red.innerHTML = "Not a valid color";
  }
});

function getColorValue(hex) {
  if (hex.length === 1) {
    hex = hex + hex;
  }
  return parseInt(hex, 16);
}
