const lastVisitDisplay = document.querySelector(".today");

// Get the current date
const curDate = new Date();
// Get the current time
const dateTime = curDate.getTime();




// Get the date of the last visit from local storage
const lastVisit = localStorage.getItem('lastVisit');

if (lastVisit) {
  // Calculate the difference in time between the last visit and the current visit
  const difTime = dateTime - new Date(lastVisit).getTime();

  // Convert the time difference to days and round to the nearest whole number
  const difDays = Math.round(difTime / (1000 * 60 * 60 * 24));

  // Display the number of days since the last visit
  if (difDays < 1){
  lastVisitDisplay.innerText = `Today`;

  } else{
   lastVisitDisplay.innerText = `${difDays} days ago`;
    
  }
} else{
   lastVisitDisplay.innerText = "This is your first visit"
}

// Store the current visit date in local storage
localStorage.setItem('lastVisit', curDate);





// // Check if the localStorage exists and if so, output the date
// if (lastVisit.indexOf(lastVisit) > -1) {
//    lastVisitDisplay.innerHTML = `${lastVisit}`;
// }


// // Store the date in the storage
// localStorage.setItem('last-visit', cd);





