let oLastModif = new Date(document.lastModified).getFullYear();
const footer = document.getElementById("year");
const lastElement = document.getElementById("lastmod");
const currentDateSpan = document.getElementById("current_date");

footer.innerText = `©${oLastModif}`
lastElement.innerText = `Last modified: ${document.lastModified}`
currentDateSpan.innerHTML = getDate();


function getDate()
{
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDay();

    return `${month}/${day}/${year}`
}