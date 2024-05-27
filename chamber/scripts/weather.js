const key = "60628beb7fd1b408647718048fef070c"
const lat = -25.531919217400873
const lon = -49.195448169773805
const type = "metric"
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${type}&appid=${key}`
let allWeatherMapped

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResult(data)
            console.log(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const mapWeatherObject = (apiResponse) => {
    const data = apiResponse.list.map((item) => {
        return {
            date: formatDate(item.dt_txt),
            sys: item.sys.pod,
            temp: {
                temp: item.main.temp,
                temp_min: item.main.temp_min,
                temp_max: item.main.temp_max
            },
            weather: item.weather[0]
        }
    })
    return data
}

function removeDuplicates(array) {
    
    // Get same sys
    const sys = array[0].sys

    const newArray = array.filter((item) => {
        return item.sys == sys
    })


    // Remove date duplicate
    const seen = new Set();
    return newArray.filter(item => {
      const keyValue = item.date.date_txt;
      if (seen.has(keyValue)) {
        return false;
      } else {
        seen.add(keyValue);
        return true;
      }
    });
  }

const displayResult = (data) => {

    const dataMapped = mapWeatherObject(data)
    const dataMappedSixDate = removeDuplicates(dataMapped)
    const elAnothers = document.querySelector('.anothers-days')
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    console.log(dataMappedSixDate)
    dataMappedSixDate.map(function(item, index) {

        // Current day
        if(index < 1)
        {
            // Image
            const elImage = document.querySelector('.current-day .left img');
            const iconsrc = `https://openweathermap.org/img/wn/${item.weather.icon}.png`;
            elImage.setAttribute('src', iconsrc)
            elImage.setAttribute('alt', item.weather.description)

            // Title
            const elH2 = document.querySelector('.current-day .left h2');
            elH2.innerHTML = item.weather.main

            // SubTitle 
            const elSpan = document.querySelector('.current-day .left span')
            elSpan.textContent = item.weather.description

            // Right side title
            const elRightH2 = document.querySelector('.current-day .right h2');
            elRightH2.innerHTML = item.temp.temp + " ºC"
            
            // Right side title
            const elRightSpan = document.querySelector('.current-day .right span');
            elRightSpan.innerHTML = `${item.temp.temp_min} ºC / ${item.temp.temp_max} ºC`

            return
        }

        // Anothers days
        const dayOfDate = item.date.date.getDay();
        const HTML = 
        `<div>
            <h3>${weekday[dayOfDate]}</h3>
            <img src="https://openweathermap.org/img/wn/${item.weather.icon}.png" alt="item.weather.main">
            <span>${item.temp.temp}º</span>
         </div>
        `
        elAnothers.innerHTML += HTML
    })


    // const element = document.querySelector(".weather");
    // const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    // const img = document.createElement("img");
    // img.setAttribute("src", iconsrc);

    // element.appendChild(img)
    // element.append(`${data.main.temp.toString().substring(0, 2)}º - ${data.weather[0].description}`);
}

function formatDate(date) {
    const dateAstext = date.substring(0, 10);
    return {
        date_txt: dateAstext,
        date: parseDateString(dateAstext)
    }
}

function parseDateString(dateString) {
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    return date;
}

apiFetch()