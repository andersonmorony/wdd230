const key = "60628beb7fd1b408647718048fef070c"
const lat = -25.531919217400873
const lon = -49.195448169773805
const type = "imperial"
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${type}&appid=${key}`


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResult(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


const displayResult = (data) => {
    const element = document.querySelector(".weather");
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const img = document.createElement("img");
    img.setAttribute("src", iconsrc);

    element.appendChild(img)
    element.append(`${data.main.temp.toString().substring(0,2)}º - ${data.weather[0].description}`);
    

}

apiFetch()