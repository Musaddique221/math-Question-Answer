const bnhInputs = document.querySelectorAll(".bnh-input");
const checkAreaBtn = document.querySelector("#check-area-btn");
const outputEl = document.querySelector("#output");

function calculateBaseNHeightOfTriangle(base, height) {
  const baseNHeight = base * height;
  return baseNHeight;
}

function checkAreaOfTriangle() {
  const baseNHeight = calculateBaseNHeightOfTriangle(
    Number(bnhInputs[0].value),
    Number(bnhInputs[1].value)
  );
  const divisionOfTriangle = baseNHeight / 2;
  outputEl.innerText = "The area of triangle is " + divisionOfTriangle;
}

checkAreaBtn.addEventListener("click", checkAreaOfTriangle);
