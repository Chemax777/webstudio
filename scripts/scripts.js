const portfolioNavMenu = document.querySelector('.portfolio__nav-menu')
const [...portfolioCards] = document.querySelectorAll('.port__card')
const [...portfolioTabs] = document.querySelectorAll('.portfolio__nav-menu ul li')

const items = ['Усі', 'Додаток', 'Веб-сайт', 'Дизайн', 'Маркетинг']

portfolioNavMenu.addEventListener("click", (e) => {
    if (!items.includes(e.target.innerText)) return

    let filteredCards = [];
    
    portfolioTabs.map(card => card.classList.remove('active-tab'))
    e.target.classList.add('active-tab')

    if (e.target.innerText === 'Усі') {
        portfolioCards.map(card => card.classList.remove('hidden-card'))
    } else {
        portfolioCards.map(card => card.classList.remove('hidden-card'))
        filteredCards = portfolioCards.filter(card => card.children[2].innerText !== e.target.innerText)
        filteredCards.map(filteredCard => filteredCard.classList.toggle('hidden-card'))
    }
    
})

