
const btnsubmit = document.querySelector('.btnsubmit');

btnsubmit.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.inputname').value = "";
    document.querySelector('.inputphone').value = "";
    document.querySelector('.inputemail').value = "";
    document.querySelector('.inputassunto').value = "";
    document.querySelector('.txtarea').value = "";
})

function textslide (){
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        console.log(entries)
        if(entry.intersectionRatio > 0) {
            entry.target.classList.add('show')
            observer.takeRecords(entry.target);
        } 
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
}

textslide();

const cardsContainer = document.querySelector('.specialistscards');
let isDown = false;
let startX;
let scrollLeft;

cardsContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - cardsContainer.offsetLeft;
    scrollLeft = cardsContainer.scrollLeft;
});

cardsContainer.addEventListener('mouseleave', () => {
    isDown = false;
});

cardsContainer.addEventListener('mouseup', () => {
    isDown = false;
});

cardsContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - cardsContainer.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste a sensibilidade aqui
    cardsContainer.scrollLeft = scrollLeft - walk;

    // Lógica para reposicionar os cartões
    if (cardsContainer.scrollLeft < 208) {
        cardsContainer.scrollLeft += 600; // Ajuste conforme necessário
    } else if (cardsContainer.scrollLeft > 832) { // Ajuste para o limite máximo
        cardsContainer.scrollLeft -= 600;
    }
});

// Para toque em telas sensíveis
cardsContainer.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - cardsContainer.offsetLeft;
    scrollLeft = cardsContainer.scrollLeft;
});

cardsContainer.addEventListener('touchend', () => {
    isDown = false;
});

cardsContainer.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - cardsContainer.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste a sensibilidade aqui
    cardsContainer.scrollLeft = scrollLeft - walk;
    
    // Lógica para reposicionar os cartões
    if (cardsContainer.scrollLeft < 200) {
        cardsContainer.scrollLeft += 400; // Ajuste conforme necessário
    } else if (cardsContainer.scrollLeft > 800) { // Ajuste para o limite máximo
        cardsContainer.scrollLeft -= 600;
    }
});
