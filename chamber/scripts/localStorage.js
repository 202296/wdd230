const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visits");
const daysLeftOutput = document.querySelector("#daysleft");


// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls")); // Using the Number() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps on the if block condition.

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date demonstration
todayDisplay.textContent = Date.now();
//84600000 equals the number of miliseconds in one day.


let today = new Date();
let semesterEnds = new Date(today.getFullYear(), 3, 6);
if (today.getMonth() == 3 && today.getDate() > 6) {
	semesterEnds.setFullYear(semesterEnds.getFullYear() + 1);
}

let daysleft = (semesterEnds.getTime() - Date.now()) / 84600000;

daysLeftOutput.innerHTML = `${daysleft.toFixed(0)} days<br> 🔚 The semester will officially end on ${semesterEnds}`;


const openModalButtons = document.querySelector('.open-button')
const closeModalButtons = document.querySelector('.close-bton')
const modal = document.querySelector('#modal')

  openModalButtons.addEventListener('click', ()=>{
  modal.showModal();
})

closeModalButtons.addEventListener('click', () => {
  modal.close();
})

