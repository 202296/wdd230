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
    // console.log(totalInputs); // Outputs the total number of enabled inputs in the form
    const currentDate = new Date();

    if (fruit.name === select || fruit.name === select1 || fruit.name === select2) {
        totalFat += fruit.nutritions.fat;
        console.log("Total Fat:", totalFat);
      }
    
    // print the total fat
    
    // create formatted output
    const outputText = `
         ${storedTotalItems}inputs = (${firstName}, ${email}, ${phone}, ${mySelect}, ${mySelect1}, ${mySelect2}, ${special}), Order date: ${currentDate}`;
   // display output on page
    output.innerHTML = outputText;
localStorage.setItem('myDivTotalItems', totalInputs);
// Get the current date and time
var datetime = currentDate.toISOString();
 
// Set the value of the hidden field to the current date and time
document.getElementById('datetime').value = datetime;

});


 
    }); // end of forEach loop

}; // end of function expression
displayProphets(data)
}

getProphetData();