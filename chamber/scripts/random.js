const display = document.getElementById("spotlights")

const urlCompanies = 'https://202296.github.io/wdd230/data.json';

async function displayBuisinesses() {
    const response = await fetch(urlCompanies); 
    const data = await response.json(); 
    randomDataDisplay(data.companies); 
}

function randomDataDisplay(data) {
    const filterLevel = data.filter(levels => {
        return levels.membershiplevel === "Silver" || levels.membershiplevel === "Gold";
    })

    const filterCompany = [];
    while (filterCompany.length < 3) {
        const randomIndex = Math.floor(Math.random() * filterLevel.length);
        const randomCompany = filterLevel[randomIndex];
        filterCompany.push(randomCompany);
        filterLevel.splice(randomIndex, 1);
    } 

    filterCompany.forEach((company, index) => {
        const spotlight = document.createElement("section");
        spotlight.id = `spotlight-${index + 1}`;

spotlight.innerHTML = `<h2>${company.name}</h2>
                               <img src='${company.imageurl}' alt='the logo of ${company.name}'>
                               <h3>${company.message}</h3>
                               <hr>
                               <h4>${company.businessemail}</h4>
                               <h4>${company.phonenum} | <span><a href='${company.websiteurl}'>Website</a></span></h4>`

        display.appendChild(spotlight);
    })
}

displayBuisinesses(); 