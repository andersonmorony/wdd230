const baseURL = "https://andersonmorony.github.io/wdd230/"
const dataUrl = `${baseURL}chamber/data/members.json`

async function getFetch() {
    try {
        const response = await fetch(dataUrl);
        if (response.ok) {
            const data = await response.json();
            HandleData(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}



const HandleData = (data) => {
    const memberEl = document.querySelector('.spotlights')
    const filterData = data.members.slice(0, 4)

    filterData.forEach(element => {
        const html = 
            `<div class="card">
                <picture>
                    <img src="${element.image}"  alt="${element.name}" loading="lazy">
                </picture>
                <h3>${element.name}</h3>
                <a href="${element.websiteUrl}">Details</a>
            </div>`
            memberEl.innerHTML += html;
    });
}

getFetch()