


const lastVisitDisplay = document.querySelector(".today");

// Get the current date
const curDate = new Date();
// Get the current time
const dateTime = curDate.getTime();




// Get the date of the last visit from local storage
const lastVisit = localStorage.getItem('lastVisit');
let numberVisits = Number(window.localStorage.getItem("visits-ls")); // Using the Number() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps on the if block condition.
if (lastVisit || numberVisits) {
  // Calculate the difference in time between the last visit and the current visit
  const difTime = dateTime - new Date(lastVisit).getTime();

  // Convert the time difference to days and round to the nearest whole number
  const difDays = Math.round(difTime / (1000 * 60 * 60 * 24));


    if (numberVisits == 0 && difDays < 1) {
	lastVisitDisplay.textContent = `This is your first visit!`;
}
  // Display the number of days since the last visit
  else if (numberVisits !==0 && difDays < 1){
  lastVisitDisplay.innerText = `Today`;

  } else {
   lastVisitDisplay.innerText = `${difDays} days ago`;
    
  }
  
  

// determine if this is the first visit or display the number of visits.


// increment the number of visits.
numberVisits++;

} 

// Store the current visit date in local storage
localStorage.setItem('lastVisit', curDate);
// store the new number of visits value
localStorage.setItem("visits-ls", numberVisits);
// show todays date demonstration





// // Check if the localStorage exists and if so, output the date
// if (lastVisit.indexOf(lastVisit) > -1) {
//    lastVisitDisplay.innerHTML = `${lastVisit}`;
// }


// // Store the date in the storage
// localStorage.setItem('last-visit', cd);





