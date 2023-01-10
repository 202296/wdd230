const fullDate = new Date();
const date = fullDate.getDate();
const month = fullDate.getMonth() + 1;
const hour = fullDate.getHours();
const min = fullDate.getMinutes();
const sec = fullDate.getSeconds();
const fullYear = fullDate.getFullYear();

const sumb = document.querySelector('footer');
sumb.innerHTML = `&copy; ${fullYear} | Koko Mouhamed Jean Patrick | Ivory Coast`;

const para = document.createElement('p');
para.textContent = `Last Updated: ${date}/${month}/${fullYear} ${hour}:${min}:${sec}`;
sumb.appendChild(para)
