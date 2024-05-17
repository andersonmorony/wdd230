const hamButton = document.querySelector('#btn-menu');
const navigation = document.querySelector('.navigation');
const btnJoin = document.getElementById("btn-join");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


btnJoin.addEventListener('click', () => {
	window.location.href = "join.html"
})

