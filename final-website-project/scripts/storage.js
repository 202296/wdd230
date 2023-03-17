form.addEventListener("submit", function(event) {
    event.preventDefault();
    // Get select elements
    const select1 = document.getElementById("mySelect");
    const select2 = document.getElementById("mySelect1");
    const select3 = document.getElementById("mySelect2");
  
    // Get selected values and convert them to numbers
    const value1 = Number(select1.value);
    const value2 = Number(select2.value);
    const value3 = Number(select3.value);
  
    // Add values together
    const total = value1 + value2 + value3;
  
    // Display total on page
    const totalElement = document.getElementById("result");
    totalElement.textContent = `Total: ${total}`;
  })
  