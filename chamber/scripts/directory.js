const btnGrid = document.querySelector('#btn-grid')
const btnList = document.querySelector('#btn-list')
const members = document.querySelector('.members')


btnList.addEventListener('click', () => {
    members.classList.remove('grid')
    members.classList.add('list')
    btnGrid.classList.remove('actived')
    btnList.classList.add('actived')
})

btnGrid.addEventListener('click', () => {
    members.classList.remove('list')
    members.classList.add('grid')
    btnList.classList.remove('actived')
    btnGrid.classList.add('actived')
})
