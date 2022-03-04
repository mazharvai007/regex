let colorValue = document.querySelector(".colorValue");
let error = document.querySelector(".error");
let codeWrap = document.querySelector(".codeWrap");
let code = document.querySelector("code.code");
let copy = document.querySelector(".copy img");

colorValue.addEventListener("keyup", (e) => {
  e.preventDefault();
  let value = colorValue.value;

  // #FFEE00 or #FE0
  let regx = /#([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})/i;

  if (value.length === 4 || value.length === 7) {
    let output = regx.exec(value);

    if (output === null) {
      return (error.innerHTML = "Not a valid color");
    } else {
      codeWrap.style.display = "flex";
      return (code.innerHTML = `rgb(${getColorValue(
        output[1]
      )}, ${getColorValue(output[2])}, ${getColorValue(output[3])})`);
    }
  } else {
    if (e.target.value === "") {
      return (error.innerHTML = "Enter a valid color");
    }
  }
});

function getColorValue(hex) {
  if (hex.length === 1) {
    hex = hex + hex;
  }
  return parseInt(hex, 16);
}

console.log(copy.innerText);

copy.addEventListener("click", (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(code.innerText);
});
