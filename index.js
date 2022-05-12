const toggleTheme = document.querySelector('button')
const themeIcon = document.querySelector('.mode-icon')
const main = document.querySelector('main')
const fish = document.querySelector('.fish')
// bulb: '💡'
// blub: 🐠'
const sun = '☀️'
const moon = '🌛'

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    main.classList.add('dark')
    themeIcon.innerText = sun
}

toggleTheme.addEventListener('click', () => {
    main.classList.toggle('dark')
    themeIcon.innerText = themeIcon.innerText === sun ? moon : sun
})

let numberOfBlubs = 0
fish.addEventListener('click', () => {
    fish.insertAdjacentHTML("afterbegin", `<div id="blub-${numberOfBlubs}" class="blub ${numberOfBlubs % 2 === 0 && 'dark'}">blub</div>`)
    const currentFish = document.querySelector(`#blub-${numberOfBlubs}`)
    numberOfBlubs++
    setTimeout(() => {
        currentFish.remove()
    }, 2000)
})
