const toggleTheme = document.querySelector('button')
const themeIcon = document.querySelector('.mode-icon')
const main = document.querySelector('main')
// bulb: '💡'
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



