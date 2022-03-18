const toggleControlsBtn = document.getElementById("toggle-controls-btn");
const controlsContainer = document.getElementsByClassName("controls");

function toggleControlsContainer() {
  controlsContainer[0].classList.toggle("visible");
  changeToggleButtonText();
}

function changeToggleButtonText() {
  if (controlsContainer[0].classList.contains("visible")) {
    toggleControlsBtn.innerText = "Tudo pronto?";
  } else {
    toggleControlsBtn.innerText = "Gosta de Mudanças?";
  }
}

toggleControlsBtn.addEventListener("click", toggleControlsContainer);

//Elementos que serão alterados:
const pageBackgroundColor = document.body;
const pageText = document.querySelectorAll(".text-content p");

//Controles:
//const BGColorButtons = document.querySelectorAll(".bg-color-controls button");
const lightBtn = document.getElementById("bg-color1-btn");
const mediumBtn = document.getElementById("bg-color2-btn");
const darkBtn = document.getElementById("bg-color3-btn");
const textColor = document.getElementById("text-color");
const textSize = document.getElementById("font-size");
const textSizeLabel = document.getElementById("font-size-label");
const lineSize = document.getElementById("line-size");
const lineSizeLabel = document.getElementById("line-size-label");
const fontFamilyButtons = document.querySelectorAll(".font-family-controls button");

let userConfig = {
  BGColor: "rgb(250, 250, 250)",
  fontColor: "rgb(0, 0, 0)",
  fontSize: "16px",
  lineHeight: "24px",
  fontFamily: "Arial",
};

function changeBackGroundColor(event) {
  //antes recebia a cor como parâmetro
  pageBackgroundColor.style.backgroundColor = event.target.value;

  userConfig.BGColor = event.target.value;
  saveUserConfig();
}

//let colorOptions = ['rgb(250, 250, 250)', 'rgb(125, 125, 125)', 'rgb(39, 39, 39)']
lightBtn.addEventListener("click", changeBackGroundColor);
mediumBtn.addEventListener("click", changeBackGroundColor);
darkBtn.addEventListener("click", changeBackGroundColor);

/*
BGColorButtons.forEach((btn, key) => {
    btn.addEventListener('click', changeBackGroundColor(colorOptions[key]));
})
*/

function saveUserConfig() {
  let storageConfig = JSON.stringify(userConfig)
  localStorage.setItem('preferences', storageConfig);
}

function loadUserPreferences() {
  let configs = JSON.parse(localStorage.getItem('preferences'));
  pageBackgroundColor.style.backgroundColor = configs.BGColor;
  
  pageText.forEach(paragraph => {
    paragraph.style.color = configs.fontColor;
    paragraph.style.fontSize = configs.fontSize;
    paragraph.style.lineHeight = configs.lineHeight;
    paragraph.style.fontFamily = configs.fontFamily;
  })
}

window.onload = function () {
  if(localStorage.length > 0) {
    loadUserPreferences();
  }
}