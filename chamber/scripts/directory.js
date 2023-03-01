const url = 'https://202296.github.io/wdd230/data.json';

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)



  const displayProphets = (companies) => {
    const cards = document.querySelector('div.cardir'); // select the output container element

    companies.forEach((company) => { 
      let card = document.createElement('article');
      let card1 = document.createElement('div');
      card1.setAttribute('id', 'logo')
      
    let  card2 = document.createElement('div');
      card2.setAttribute('id', 'detail')


    let name = document.createElement('h2');
    let address = document.createElement('h3');
    let memLevel = document.createElement('h3');
    let phoneNum = document.createElement('h3');
    let rates = document.createElement('h3');
    let found = document.createElement('h3');
    let websiteUrl = document.createElement('h3');
    let imageUrl = document.createElement('img');

    
      // Build the h2 content out to show the company's full name - finish the template string
      name.textContent = `${company.name}`;
      address.textContent = `${company.address}`;
      memLevel.textContent = `${company.membershiplevel}`;
      phoneNum.textContent = `${company.phonenum}`
      rates.textContent = `${company.rate}`
      found.textContent = `${company.founded}`
      websiteUrl.textContent = `${company.websiteurl}`

      // Build the image portrait by setting all the relevant attribute
      imageUrl.setAttribute('src', company.imageurl);
      imageUrl.setAttribute('alt', `logo of ${company.name}`);

      imageUrl.setAttribute('loading', 'lazy');
      imageUrl.setAttribute('id', 'complog');
  
      // Append the section(card) with the created elements
    //   card1.appendChild(name);
      card1.appendChild(imageUrl);
      card2.appendChild(address);
      card2.appendChild(memLevel);
      card2.appendChild(phoneNum);
    //   card2.appendChild(rates);
    //   card2.appendChild(found);
      card2.appendChild(websiteUrl);

     card.appendChild(card1);
     card.appendChild(card2);  
     
     cards.appendChild(card)


    //  const decadeBtn = document.querySelector('.decade');

    //    decadeBtn.addEventListener("click", filte);

    //    function filte(){
    //      if(companies.length<11){
    //        card.remove()
    //      }
    //    }
       
}); // end of forEach loop

  }; // end of function expression
  displayProphets(data.companies)
}

getProphetData();