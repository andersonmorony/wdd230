let oLastModif = new Date(document.lastModified).getFullYear();
const footer = document.getElementById("year");
const lastElement = document.getElementById("lastmod");

footer.innerText = `©${oLastModif}`
lastElement.innerText = `Last modified: ${document.lastModified}`