const d = new Date();
const day = d.toLocaleString('en-us', {  weekday: 'long' });
const monthName = d.toLocaleString('en-us', { month: "long" });
const date = d.getDate();
const year = d.getFullYear();
const selHead = document.getElementById('date');
const lastModifDate = document.createElement('h2');


lastModifDate.innerHTML = `${day}, ${date} ${monthName} ${year}`
selHead.appendChild(lastModifDate)


const mdal = document.getElementById('banner');
const remove = document.querySelectorAll('.close-button');
for(let i=0; i<remove.length; i++){
  remove[i].addEventListener('click', function() {
    remove[i].parentElement.style.display = 'none';
  })
}


function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburguerBtn").classList.toggle("open");

}
const x = document.getElementById("hamburguerBtn");
x.onclick = toggleMenu;


const fullYear = new Date().getFullYear();
const sumb = document.getElementById('info');
sumb.innerHTML = `&copy; ${fullYear} Abidjan Chamber of Commerce <br> Koko Mouhamed Jean Patrick <br> WDD 230 Project`;
const para = document.createElement('h4');
para.textContent = `Last Modification: ${document.lastModified}`;
sumb.appendChild(para)

const sumbo = document.getElementById('medium');
sumbo.innerHTML = `&copy; ${fullYear} Abidjan Chamber of Commerce | Koko Mouhamed Jean Patrick | WDD 230 Project |`;

const parag = document.createElement('h4');
parag.textContent = `Last Modification: ${document.lastModified}`;
sumbo.appendChild(parag)
const sumbol = document.getElementById('large');
sumbol.innerHTML = `&copy; ${fullYear} Abidjan Chamber of Commerce | Koko Mouhamed Jean Patrick | WDD 230 Project | Last Modification: ${document.lastModified}`;

document.querySelectorAll('.nav-link').forEach(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'page')
  }
})


const weekDay = d.getDay();

if ( weekDay == 1) {

  mdal.style.display = 'flex';

} else {

  mdal.style.display = 'none';

}

