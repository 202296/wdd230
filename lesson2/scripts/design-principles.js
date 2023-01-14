const fullYear = new Date().getFullYear();

const sumb = document.querySelector('footer');
sumb.innerHTML = `&copy; ${fullYear} | Koko Mouhamed Jean Patrick | Last Updated: ${document.lastModified} `;
