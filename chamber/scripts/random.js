const display = document.getElementById("spotlights")

const urlCompanies = 'https://202296.github.io/wdd230/data.json';

async function displayBuisinesses() {
    const response = await fetch(urlCompanies); 
    const data = await response.json(); 
    randomDataDisplay(data.companies); 
}

function randomDataDisplay(data) {
    const highMembershipLevels = data.filter(business => {
        return business.membershiplevel === "Silver" || business.membershiplevel === "Gold";
    })

    const selectedBusinesses = [];
    while (selectedBusinesses.length < 3) {
        const randomIndex = Math.floor(Math.random() * highMembershipLevels.length);
        const randomBusiness = highMembershipLevels[randomIndex];
        selectedBusinesses.push(randomBusiness);
        highMembershipLevels.splice(randomIndex, 1);
    } 

    selectedBusinesses.forEach((item, index) => {
        const spotlight = document.createElement("section");
        spotlight.id = `spotlight-${index + 1}`;

        const title = document.createElement("h2");
        title.innerText = item.name;
        spotlight.appendChild(title);

        const image = document.createElement("img");
        image.src = item.imageurl; 
        image.alt = item.businessName; 
        spotlight.appendChild(image);

        const catchphrase = document.createElement("h3");
        catchphrase.innerText = item.catchPhrase;
        spotlight.appendChild(catchphrase);

        const divider = document.createElement("hr");
        spotlight.appendChild(divider);

        const bottomRow = document.createElement("div");
        bottomRow.classList.add("bottom-row");

        const phoneNumber = document.createElement("h4");
        phoneNumber.innerText = item.phonenum;
        bottomRow.appendChild(phoneNumber);

        const line = document.createElement("h4");
        line.innerText = " | ";
        bottomRow.appendChild(line);

        const link = document.createElement("a")
        link.href = item.websiteurl;
        link.target ="_blanc"; 

        const linkTitle = document.createElement("h4");
        linkTitle.innerText = "Website";
        link.appendChild(linkTitle);

        bottomRow.appendChild(link);

        spotlight.appendChild(bottomRow);

        display.appendChild(spotlight);
    })

    console.log(selectedBusinesses);
}

displayBuisinesses(); 