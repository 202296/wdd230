const fruitUrl = 'https://brotherblazzard.github.io/canvas-content/fruit.json'

async function getProphetData() {
  const response = await fetch(fruitUrl);
  const data = await response.json();


  const displayProphets = (fruits) => {
    const selectFruit = document.getElementById('mySelect');
    const selectFruit1 = document.getElementById('mySelect1');
    const selectFruit2 = document.getElementById('mySelect2');

    fruits.forEach((fruit) => {    
         const select = document.createElement('option');
         select.text = fruit.name
         selectFruit.add(select)
         
         const select1 = document.createElement('option');
         select1.text = fruit.name
         selectFruit1.add(select1)

         const select2 = document.createElement('option');
         select2.text = fruit.name
         selectFruit2.add(select2)


         const form = document.getElementById("my-form");
         const output = document.getElementById("output");
        

   form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent default form submission behavior
  
  // get form values
  const firstName = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const mySelect = document.getElementById("mySelect").value;
  const mySelect1 = document.getElementById("mySelect1").value;
  const mySelect2 = document.getElementById("mySelect2").value;

  const special = document.getElementById("special").value;

         

const storedTotalItems = localStorage.getItem('myDivTotalItems');
    const inputs = Array.from(form.elements).filter(input => input.value !== '' && input.name !== 'exclude-me');
    const totalInputs = inputs.length;
    const currentDate = new Date();

    

      const filterLevel = data.filter(levels => {
          return fruit.members === "Silver" || levels.membershiplevel === "Gold";
      })
  
      const filterCompany = [];
      while (filterCompany.length < 3) {
          const randomIndex = Math.floor(Math.random() * filterLevel.length);
          const randomCompany = filterLevel[randomIndex];
          filterCompany.push(randomCompany);
          filterLevel.splice(randomIndex, 1);
      }

  let selectedFruits = [mySelect, mySelect1, mySelect2];
  
  
  let totalCarbs = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalCalories = 0;
  let totalSugar = 0;

  fruits.forEach(fruit => {
  if (selectedFruits.includes(fruit.name)) {
    totalCarbs += fruit.nutritions.carbohydrates;
    totalProtein += fruit.nutritions.protein;
    totalFat += fruit.nutritions.fat;
    totalCalories += fruit.nutritions.calories;
    totalSugar += fruit.nutritions.sugar;
    
  }
});
    
    // create formatted output
    const outputText = `
         ${storedTotalItems}inputs = (${firstName}, ${email}, ${phone}, ${mySelect}, ${mySelect1}, ${mySelect2}, ${special}), Order date: ${currentDate}, total amount of carbohydrates: ${totalCarbs}, protein: ${totalProtein}, fat: ${totalFat}, calories: ${totalCalories}, and sugar: ${totalSugar}`;
   // display output on page
    output.innerHTML = outputText;
localStorage.setItem('myDivTotalItems', totalInputs);
// Get the current date and time
var datetime = currentDate.toISOString();
 
// Set the value of the hidden field to the current date and time
document.getElementById('datetime').value = datetime;

localStorage.setItem('totalDrinks', `Mr/Mrs ${firstName} you have mixed ${selectedFruits.length} specialty drinks.`);

});

}); // end of forEach loop

}; // end of function expression
displayProphets(data)
}

getProphetData();