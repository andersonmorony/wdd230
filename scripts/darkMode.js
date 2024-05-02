const footers = document.querySelector("footer");
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const sections = document.querySelectorAll('section');

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#262626";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
		modeButton.style.color = "#fff";
        header.style.background = "#262626"
        header.style.color = "#fff"
        nav.style.background = "#262626"
        body.style.background = "#262626"
        body.style.color = "#262626"
        sections.forEach((section) =>  {
            section.style.color = "#262626"
            section.style.background = "#EEE"
            section.style.boxShadow = "8px 21px 42px 0px rgb(248 247 247 / 10%)"
        })
	} else {
		main.style.background = "#fff";
		main.style.color = "#262626";
		modeButton.textContent = "🕶️";
        header.style.background = "#FFF"
        header.style.color = "#262626"
        nav.style.background = "#FFF"
        body.style.background = "#FFF"
        body.style.color = "#FFF"
        footers.style.color = "#262626"
        sections.forEach((section) =>  {
            section.style.color = "#262626"
            section.style.background = "#fff"
            section.style.boxShadow = "8px 21px 42px 0px rgba(0,0,0,0.1)"
        })
	}
});