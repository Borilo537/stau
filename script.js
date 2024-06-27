const sim = document.querySelector('.botao')
const X = document.querySelector('.X')

sim.addEventListener('click', () => {
    sim.style.opacity = '0.8';
    setTimeout(() => {
        // window.close() 
    }, 1000)
})

X.addEventListener('click', () => {
    sim.style.opacity = '0.8';
    setTimeout(() => {
        // window.close() 
    }, 100)
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        setTimeout(() => {
            // window.close();
        }, 1000);
    }
});