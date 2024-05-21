const baseURL = "https://andersonmorony.github.io/wdd230/"
const linksURL = `${baseURL}data/links.json`


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(data) {
    const element = document.getElementById("card-links");
    
    
    data.weeks.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.week}: `
        for (let index = 0; index < item.links.length; index++) {

            if(index > 0 && index < item.links.length)
            {
                li.append(" | ");
            }

            const a = document.createElement("a");
            const currentLink = item.links[index];

            a.setAttribute("href", baseURL + currentLink.url);
            a.setAttribute("target", "_blank")
            a.innerText = currentLink.title
            li.append(a);
        }
        element.appendChild(li)
    });



}

getLinks();