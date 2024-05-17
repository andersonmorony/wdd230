let oLastModif = new Date(document.lastModified).getFullYear();
const footer = document.getElementById("year");
const lastElement = document.getElementById("lastmod");
const currentDateSpan = document.getElementById("current_date");
const inputTimestamp = document.getElementById("timestamp");

footer.innerText = `©${oLastModif}`
lastElement.innerText = `Last modified: ${document.lastModified}`


if(currentDateSpan != null && currentDateSpan != undefined)
{
    currentDateSpan.innerHTML = getDate();
}

if(inputTimestamp != null && inputTimestamp != undefined)
{
    inputTimestamp.value = getDate();
}


function getDate()
{
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDay();

    return `${month}/${day}/${year}`
}