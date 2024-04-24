let oLastModif = new Date(document.lastModified).getFullYear();
const footer = document.getElementsByTagName("footer");
const firstP = footer[0].getElementsByTagName("p")[0];

firstP.innerText = `©${oLastModif}`