const lastVisitDisplay = document.querySelector(".today");

const lastVisit = window.localStorage.getItem("last-visit")
const cd = new Date();



// Check if the localStorage exists and if so, output the date
if (lastVisit.indexOf(lastVisit) > -1) {
   lastVisitDisplay.innerHTML = `${lastVisit}`;
}


// Store the date in the storage
localStorage.setItem('last-visit', cd);









