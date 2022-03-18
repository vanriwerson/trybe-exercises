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
const lineSize = document.getElementById("line-size");
//const fontFamilyButtons = document.querySelectorAll(".font-family-controls button");
const family1Btn = document.getElementById('family1-btn');
const family2Btn = document.getElementById('family2-btn');
const family3Btn = document.getElementById('family3-btn');

let userConfig = {
  BGColor: "",
  fontColor: "",
  fontSize: "",
  lineHeight: "",
  fontFamily: "",
};

//Local storage functions:
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

//Change preference functions:
function changeBackGroundColor(event) {
  let colorOptions = ['rgb(250, 250, 250)', 'rgb(125, 125, 125)', 'rgb(39, 39, 39)']
  let selectedBGColor = colorOptions[event.target.value]
  pageBackgroundColor.style.backgroundColor = selectedBGColor;

  userConfig.BGColor = selectedBGColor;
  saveUserConfig();
}


lightBtn.addEventListener("click", changeBackGroundColor);
mediumBtn.addEventListener("click", changeBackGroundColor);
darkBtn.addEventListener("click", changeBackGroundColor);

function selectTextColor() {
  let selectedColor = textColor.value;
  changePageTextFontColor(selectedColor);
}

function changePageTextFontColor(color) {
  pageText.forEach(paragraph => {
    paragraph.style.color = color;
  })

  userConfig.fontColor = color;
  saveUserConfig();
}

textColor.addEventListener('change', selectTextColor)

function selectPageTextSize() {
  const textSizeLabel = document.getElementById("font-size-label");
  textSizeLabel.innerText = textSize.value;

  let textSizeSelected = `${16 + Number(textSize.value)}px`;
  changePageTextSize(textSizeSelected);
}

function changePageTextSize(size) {
  pageText.forEach(paragraph => {
    paragraph.style.fontSize = size;
  })

  userConfig.fontSize = size;
  saveUserConfig();
}

textSize.addEventListener('change', selectPageTextSize);

function selectPageLineSize () {
  const lineSizeLabel = document.getElementById("line-size-label");
  lineSizeLabel.innerText = lineSize.value;

  let lineSizeSelected = `${24 + Number(lineSize.value)}px`;
  changePageLineSize(lineSizeSelected);
}

function changePageLineSize(size) {
  pageText.forEach(paragraph => {
    paragraph.style.lineHeight = size;
  })

  userConfig.lineHeight = size;
  saveUserConfig();
}

lineSize.addEventListener('change', selectPageLineSize);


function selectPageTextFontFamily(event) {
  let fontOptions = ['Roboto', 'Times New Roman', 'Comic Neue'];
  let selectedFont = fontOptions[event.target.value];
  
  changePageTextFontFamily(selectedFont);
}

function changePageTextFontFamily(family) {
  pageText.forEach(paragraph => {
    paragraph.style.fontFamily = family;
  })

  userConfig.fontFamily = family;
  saveUserConfig();
}

family1Btn.addEventListener('click', selectPageTextFontFamily)
family2Btn.addEventListener('click', selectPageTextFontFamily)
family3Btn.addEventListener('click', selectPageTextFontFamily)

//Carrega as preferências salvas no Local Storage:
window.onload = function () {
  if(localStorage.length > 0) {
    loadUserPreferences();
  }
}