const fullYear = new Date().getFullYear();

const sumb = document.querySelector('footer');
sumb.innerHTML = `&copy; ${fullYear} | Koko Mouhamed Jean Patrick | Ivory Coast`;

const para = document.createElement('p');
para.textContent = `Last Updated: ${document.lastModified}`;
sumb.appendChild(para)
