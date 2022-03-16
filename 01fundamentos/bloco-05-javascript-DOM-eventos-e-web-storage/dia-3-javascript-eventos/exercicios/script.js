function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

//EXERCÍCIO 01.
function createDaysOfTheMonth() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const holidaysList = [24, 25, 31];
  const fridayDaysList = [4, 11, 18, 25];
  const daysList = document.getElementById("days");

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = document.createElement("li");
    day.setAttribute("class", "day");
    day.innerText = dezDaysList[i];

    for (let holliday of holidaysList) {
      if (holliday === dezDaysList[i]) {
        day.classList.add("holiday");
      }
    }

    for (let friday of fridayDaysList) {
      if (friday === dezDaysList[i]) {
        day.classList.add("friday");
      }
    }

    daysList.appendChild(day);
  }
}

createDaysOfTheMonth();

//EXERCÍCIO 02.
function createButton(label, id) {
  const buttonsContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");

  newButton.setAttribute("id", id);
  newButton.innerHTML = label;

  buttonsContainer.appendChild(newButton);
}

createButton("Feriados", "btn-holiday");

//EXERCÍCIO 03.
let holidayEmphasis = false;

function toggleHolidaysEmphasis() {
  if (holidayEmphasis === false) {
    changeTextEmphasis("green", "#eee", "holiday");
    holidayEmphasis = true;
  } else {
    changeTextEmphasis("#eee", "#777", "holiday");
    holidayEmphasis = false;
  }
}

//Function otimizada para reutilização
function changeTextEmphasis(BGColor, textColor, targetClass) {
  let daysList = document.querySelectorAll(".day");

  for (i = 0; i < daysList.length; i += 1) {
    if (daysList[i].classList.contains(targetClass)) {
      daysList[i].style.backgroundColor = BGColor;
      daysList[i].style.color = textColor;
    }
  }
}

const holidayBtn = document.getElementById("btn-holiday");
holidayBtn.addEventListener("click", toggleHolidaysEmphasis);

//EXERCÍCIO 04.
createButton("Sexta-feira", "btn-friday");

//EXERCÍCIO 05.
let fridayEmphasis = false;

function toggleFridaysEmphasis() {
  if (fridayEmphasis === false) {
    changeTextEmphasis("#777", "#eee", "friday");
    fridayEmphasis = true;
  } else {
    changeTextEmphasis("#eee", "#777", "friday");
    fridayEmphasis = false;
  }
}

const fridayBtn = document.getElementById("btn-friday");
fridayBtn.addEventListener("click", toggleFridaysEmphasis);

//EXERCÍCIO 06.
function zoomIn (event) {
  event.target.style.fontSize = '30px';
  event.target.style.cursor = 'pointer';
}

function zoomOut (event) {
  event.target.style.fontSize = '20px';
  event.target.style.cursor = 'arrow';
}

let daysList = document.querySelectorAll(".day");

for (i = 0; i < daysList.length; i += 1) {
  daysList[i].addEventListener('mouseover', zoomIn);
  daysList[i].addEventListener('mouseleave', zoomOut);
}

//EXERCÍCIO 07.
const tasksContainer = document.querySelector('.my-tasks');

function addNewTaskTitle (taskTitle) {
  let newTaskTitle = document.createElement('span');
  newTaskTitle.innerText = taskTitle;
  
  tasksContainer.appendChild(newTaskTitle);
}

addNewTaskTitle('Estudar');

//EXERCÍCIO 08.
function addNewTaskSubtitle (color) {
  let newTaskSubitle = document.createElement('div');
  newTaskSubitle.setAttribute('class', 'task')
  newTaskSubitle.style.backgroundColor = color;
  
  tasksContainer.appendChild(newTaskSubitle);
}

addNewTaskSubtitle('yellow')

//EXERCÍCIO 09.
function toggleSelectedClass(event) {
  event.target.classList.toggle('selected');
}

let tasksList = document.querySelectorAll('.task');
for (let i = 0; i < tasksList.length; i += 1) {
  tasksList[i].addEventListener("click", toggleSelectedClass);
}
