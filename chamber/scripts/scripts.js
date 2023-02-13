const d = new Date();
const day = d.toLocaleString('en-us', {  weekday: 'long' });
const monthName = d.toLocaleString('en-us', { month: "long" });
const date = d.getDate();
const year = d.getFullYear();
const selHead = document.getElementById('date');
const lastModifDate = document.createElement('h2');
lastModifDate.innerHTML = `${day}, ${date} ${monthName} ${year}`
selHead.appendChild(lastModifDate)

const dt = d.getDay();
const displayHead = document.getElementById('diamond');
const displayPar = document.getElementById('message');
const displayLink = document.getElementById('more');

if(dt==1) {
const cutting = document.getElementById('ribbon');
const cut = document.createElement('span_two');
cut.innerHTML = '❌';
cutting.appendChild(cut);
}
const remove = document.querySelectorAll('span_two');
for(let i=0; i<remove.length; i++){
  remove[i].addEventListener('click', function() {
    remove[i].parentElement.style.display = 'none';
  })
}


switch(dt) {
    case 1: displayHead.textContent = "🔹 The Diamond Shack";
            displayPar.textContent = "Join us for the grand opening of The Diamond Shack, Thursday at 1:00p.m.";
            displayLink.textContent = "more info ...";
        break;
}

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburguerBtn").classList.toggle("open");

}
const x = document.getElementById("hamburguerBtn");
x.onclick = toggleMenu;

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