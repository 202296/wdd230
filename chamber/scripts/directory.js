const url = 'https://202296.github.io/wdd230/data.json';

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)



  const displayProphets = (companies) => {
    const cards = document.querySelector('div.cardir'); // select the output container element

    companies.forEach((company) => { 
      let card = document.createElement('article');


    let name = document.createElement('h2');
    name.classList.add("details");
    let address = document.createElement('h3');
    let phoneNum = document.createElement('h3');
    let rates = document.createElement('h3');
    rates.classList.add("detail");
    let found = document.createElement('h3');
    found.classList.add("detail");
    let websiteUrl = document.createElement('a');

    
    let imageUrl = document.createElement('img');

    
      // Build the h2 content out to show the company's full name - finish the template string
      name.textContent = `${company.name}`;
      address.textContent = `${company.address}`;
      phoneNum.textContent = `${company.phonenum}`
      rates.textContent = `Rate: ${company.rate} ⭐`
      found.textContent = `Founded: ${company.founded}`
      websiteUrl.href=`${company.websiteurl}`;
      websiteUrl.textContent = `${company.websiteurl}`
      websiteUrl.setAttribute('target', '_blank')

      // Build the image portrait by setting all the relevant attribute
      imageUrl.setAttribute('src', company.imageurl);
      imageUrl.setAttribute('alt', `logo of ${company.name}`);

      imageUrl.setAttribute('loading', 'lazy');
      imageUrl.setAttribute('id', 'complog');
  
      // Append the section(card) with the created elements
      card.appendChild(name);
      card.appendChild(imageUrl);
      card.appendChild(address);
      card.appendChild(phoneNum);
      card.appendChild(rates);
      card.appendChild(found);
      card.appendChild(websiteUrl);  
     
     cards.appendChild(card)


    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");

    gridButton.addEventListener("click", () => {
      // example using arrow function
    cards.classList.add("grid");
    cards.classList.remove("list");
      listButton.classList.remove('active');
      gridButton.classList.add('active');
    });
    
    listButton.addEventListener("click", showList); // example using defined function
    
    function showList() {
      cards.classList.add("list");
      cards.classList.remove("grid");
      gridButton.classList.remove('active');
      listButton.classList.add('active');
    }

    
      
  
    
       
}); // end of forEach loop

  }; // end of function expression
  displayProphets(data.companies)
}

getProphetData();