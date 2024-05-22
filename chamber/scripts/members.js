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
    const memberEl = document.querySelector('.members')
    data.members.forEach(element => {
        const html = 
            `<div class="card">
                <picture>
                    <img src="${element.image}" alt="${element.name}">
                </picture>
                <span class="title">
                    <img src="images/${element.membership_level}.png" alt="${element.membership_level}">
                    ${element.name}
                </span>
                <span class="description">${element.addresses}</span>
                <span>${element.phone}</span>
                <a href="${element.websiteUrl}" target="_blank">Details</a>
            </div>`
            memberEl.innerHTML += html;
    });
}

getFetch()