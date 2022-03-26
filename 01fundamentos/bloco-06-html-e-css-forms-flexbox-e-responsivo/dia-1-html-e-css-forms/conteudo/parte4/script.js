// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function preventDefaultAction(e) {
  e.preventDefault();
}

HREF_LINK.addEventListener("click", preventDefaultAction);
INPUT_CHECKBOX.addEventListener("click", preventDefaultAction);

INPUT_TEXT.addEventListener("keypress", (e) => {
  e.preventDefault;
  
  if(e.key !== 'a') {
    e.preventDefault();
  }
});
