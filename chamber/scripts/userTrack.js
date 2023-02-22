const todayDisplay = document.querySelector(".today");

let todayDate = Date(window.localStorage.getItem("currentDate"));
todayDisplay.textContent = ` ${todayDate}`
localStorage.setItem("currentDate", todayDate);

