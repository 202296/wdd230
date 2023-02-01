const inputText = document.querySelector('input');
const buttonElem = document.querySelector('button');
const myList = document.getElementById('list');

buttonElem.addEventListener('click', function(e) {
    if(inputText.value != "") {
        e.preventDefault();
        const  creatLiElem = document.createElement('li');
        creatLiElem.innerHTML = inputText.value;
        myList.appendChild(creatLiElem);

        const  delButton = document.createElement('span');
        delButton.innerHTML = '❌';
        creatLiElem.appendChild(delButton);
        
}
const remove = document.querySelectorAll('span');
for(let i=0; i<remove.length; i++){
  remove[i].addEventListener('click', function() {
    remove[i].parentElement.style.display = 'none';
})
}
inputText.value = "";

});
