const d = new Date();
const day = d.toLocaleString('en-us', {  weekday: 'long' });
const monthName = d.toLocaleString('en-us', { month: "long" });
const date = d.getDate();
const year = d.getFullYear();
const selHead = document.getElementById('date');
const lastModifDate = document.createElement('h2');


lastModifDate.innerHTML = `${day}, ${date} ${monthName} ${year}`
selHead.appendChild(lastModifDate)


const fullYear = new Date().getFullYear();
const sumb = document.getElementById('info');
sumb.innerHTML = `&copy; ${fullYear} Spirit of Enterprise <br> Koko Mouhamed Jean Patrick <br> WDD 230 Project`;
const para = document.createElement('h4');
para.textContent = `Last Modification: ${document.lastModified}`;
sumb.appendChild(para)

const sumbo = document.getElementById('medium');
sumbo.innerHTML = `&copy; ${fullYear} Spirit of Enterprise | Koko Mouhamed Jean Patrick | WDD 230 Project |`;

const parag = document.createElement('h4');
parag.textContent = `Last Modification: ${document.lastModified}`;
sumbo.appendChild(parag)
const sumbol = document.getElementById('large');
sumbol.innerHTML = `&copy; ${fullYear} Spirit of Enterprise | Koko Mouhamed Jean Patrick | WDD 230 Project | Last Modification: ${document.lastModified}`;



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
   if (difDays == 1) {
      lastVisitDisplay.innerText = `${difDays} day ago`;
   }
   else{
   lastVisitDisplay.innerText = `${difDays} days ago`;
   }
  }
} else{
   lastVisitDisplay.innerText = "This is your first visit"
}

// Store the current visit date in local storage
localStorage.setItem('lastVisit', curDate);



window.onload = function() {
    window.addEventListener('scroll', function(e) {
        if (window.pageXOffset > 100) {
            document.querySelector('header').classList.add('is-scrolling');
        }
            else {
                document.querySelector('header').classList.remove('is-scrolling')
            }
    });

    const menu_btn = document.querySelector('.hamburguerBtn');
    const mobile_menu = document.querySelector('.primaryNav');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })



    document.querySelectorAll('.nav-link').forEach(link => {
        if(link.href === window.location.href){
          link.setAttribute('aria-current', 'page')
        }
      })
    
}


const openModalButtons = document.querySelector('.open-button')
const closeModalButtons = document.querySelector('.close-bton')
const modal = document.querySelector('#modal')

  openModalButtons.addEventListener('click', ()=>{
  modal.showModal();
})

closeModalButtons.addEventListener('click', () => {
  modal.close();
})

const remove = document.querySelectorAll('.close-button');
for(let i=0; i<remove.length; i++){
  remove[i].addEventListener('click', function() {
    remove[i].parentElement.style.display = 'none';
  })
}


