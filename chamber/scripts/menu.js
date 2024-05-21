const hamButton = document.querySelector('#btn-menu');
const navigation = document.querySelector('.navigation');
const btnJoin = document.getElementsByClassName("btn-join");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

var buttonsArray = Array.from(btnJoin);

buttonsArray.forEach(element => {
	element.addEventListener('click', () => {
		window.location.href = "join.html"
	})
});

