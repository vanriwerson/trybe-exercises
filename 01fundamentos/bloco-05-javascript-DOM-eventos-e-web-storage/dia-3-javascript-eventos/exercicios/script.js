function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
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
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
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
function createButton(label) {
  const buttonsContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");

  newButton.setAttribute("id", "btn-holiday");
  newButton.innerHTML = label;

  buttonsContainer.appendChild(newButton);
}

createButton("Feriados");

//EXERCÍCIO 03.
let holidayEmphasis = false;
function changeHollidaysBG(){
    let daysList = document.querySelectorAll(".day")
    
    for (i = 0; i < daysList.length; i += 1) {
        if (daysList[i].classList.contains('holiday')) {
            if (holidayEmphasis === false) {
                daysList[i].style.backgroundColor = 'green';
                daysList[i].style.color = '#eee';
            } else {
                daysList[i].style.backgroundColor = '#eee';
                daysList[i].style.color = '#777';
            }
        }
    }

    if (holidayEmphasis === false) {
        holidayEmphasis = true;
    } else {
        holidayEmphasis = false;
    }
}

const holidayBtn = document.getElementById('btn-holiday');
holidayBtn.addEventListener('click', changeHollidaysBG);
//background-color: '#036b52';
