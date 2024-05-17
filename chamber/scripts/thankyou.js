const url = window.location.href

const parseUrl = new URL(url);

const params = new URLSearchParams(parseUrl.search);

const fname = params.get('fname')
const lname = params.get('lname')

const title = document.getElementById("recepient")
title.textContent = `Hi ${ lname.charAt(0).toUpperCase() + lname.slice(1)}, ${fname.charAt(0).toUpperCase() + fname.slice(1)}`;