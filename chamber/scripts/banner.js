const body = document.querySelector('body')
const bannerElement = document.createElement('div')
const bannerContent = document.createElement('div')

const date = new Date();
const today = date.getDay();
switch (today) {
    case 1:
        OpenModal()
        break;
    case 2: 
        OpenModal()
        break
    case 3: 
        OpenModal()
        break
    default:
        break;
}

function OpenModal() {
    const header = document.createElement('div')
    const main = document.createElement('div')
    const text = document.createElement('p')
    const text2 = document.createElement('p')
    const text3 = document.createElement('p')
    const title = document.createElement('h1')
    
    
    // Create close button
    const btnClose = document.createElement('button');
    btnClose.textContent = "✖️"
    btnClose.addEventListener("click", closeModal);
    
    // P
    text.textContent = `
    We are excited to invite you to our Chamber of Commerce Meet and Greet event this Wednesday at 7:00 p.m. This is a fantastic opportunity to connect with local business leaders, network with like-minded professionals, and discover new opportunities within our vibrant community.
    `
    text2.textContent = `Whether you are a long-time member or new to the chamber, this event is designed to help you build meaningful relationships and gain valuable insights into the local business landscape. Don’t miss out on this chance to enhance your professional network and support our community’s growth.`
    
    text3.textContent = `Come join us for an evening of connection, collaboration, and community spirit. See you on Wednesday!`
    
    title.textContent = "Join Us for a Chamber of Commerce Meet and Greet!";
    
    // Add a class to element
    bannerElement.classList.add('banner')
    bannerContent.classList.add('banner-content')
    main.classList.add('main')
    header.classList.add('header')
    
    bannerElement.appendChild(bannerContent)
    header.appendChild(btnClose)
    bannerContent.appendChild(header)
    main.appendChild(title)
    main.appendChild(text)
    main.appendChild(text2)
    main.appendChild(text3)
    bannerContent.appendChild(main)
    
    // Append element at body
    body.appendChild(bannerElement)
    
    window.scrollTo({ top: 1, behavior: 'smooth' });
    
    body.style.overflowY = 'hidden'
}

function closeModal() {
    bannerElement.classList.add('banner_hidden')
    body.style.overflowY = 'visible'
}

