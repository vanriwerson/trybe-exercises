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

// Escreva seu código abaixo.

//EXERCÍCIO 01.
function createDaysOfTheMonth() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ];
  const hollidaysList = [24, 25, 31];
  const fridayDaysList = [4, 11, 18, 25];
  const daysList = document.getElementById("days");

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = document.createElement("li");
    day.setAttribute("class", "day");
    day.innerText = dezDaysList[i];

    for (let holliday of hollidaysList) {
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
