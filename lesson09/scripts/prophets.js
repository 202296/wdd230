const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  const log = data.prophets



  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    prophets.forEach((prophet) => { 
      // console.log(prophet)
      let card = document.createElement('section');
      let card1 = document.createElement('div');
      card1.setAttribute('id', 'card')
      
    let  card2 = document.createElement('div');
      card2.setAttribute('id', 'info')
      let  card3 = document.createElement('div');
      card3.setAttribute('id', 'pic')


    let h2 = document.createElement('h2');
    let birth_date = document.createElement('h3');
    let birth_place = document.createElement('h3');
    let children = document.createElement('h3');
    let leng = document.createElement('h3');
    let deathdate = document.createElement('h3');
    let ages = document.createElement('h3');
    let portrait = document.createElement('img');

    
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      birth_date.innerHTML = `<span>Birth: </span>  ${prophet.birthdate}`;
      birth_place.innerHTML = `<span>Place:</span> ${prophet.birthplace}`;
      children.innerHTML = `<span>Children:</span> ${prophet.numofchildren}`
      leng.innerHTML = `<span>Prophet Years:</span> ${prophet.length}`
      deathdate.innerHTML = `<span>Death:</span> ${prophet.death}`

      const order = `${prophet.order}`
      let bdate = new Date(prophet.birthdate);
      let ddate = new Date(prophet.death);
      let today = new Date()
      if(order != 17) {
      let year_difference = ddate.getFullYear() - bdate.getFullYear();
      let age = year_difference;

      ages.innerHTML = `<span>Age:</span> ${age}`
      }

      else {
        let year_difference = today.getFullYear() - bdate.getFullYear();
        let age = year_difference - 1;

      ages.innerHTML = `<span>Age:</span> ${age}`
      }


      

      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      
      if(order == 1) {
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}st Latter-day President`);
      }
      else if(order == 2) {
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}nd Latter-day President`);
      }
      else if(order == 3){
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}rd Latter-day President`);
      }
      else {
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
      }
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('id', 'port');
  
      // Append the section(card) with the created elements
      card1.appendChild(h2);
      card2.appendChild(birth_date);
      card2.appendChild(birth_place);
      card2.appendChild(children);
      card2.appendChild(leng);
      card2.appendChild(deathdate);
      card2.appendChild(ages);
      card3.appendChild(portrait)

     card.appendChild(card1);
     card.appendChild(card2); 
     card.appendChild(card3); 
     
     cards.appendChild(card)


     const decadeBtn = document.querySelector('.decade');

       decadeBtn.addEventListener("click", filte);

       function filte(){
         if(prophet.length<11){
           card.remove()
         }
       }
       
}); // end of forEach loop

  }; // end of function expression
  displayProphets(data.prophets)
}

getProphetData();




