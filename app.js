
const btnsubmit = document.querySelector('.btnsubmit');
const cardsContainer = document.querySelector('.specialistscards');
const cards = document.querySelector('.cards');

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

cards.addEventListener('click', (e) => {
    e.preventDefault();

    const totalCards = cards.length;

    currentI += direction;

    if (currentI < 0) {
        currentI = totalCards - 1;
    } else if (currentI >= totalCards) {
        currentI = 0;
    }

    const offset = -currentI * 100;
    cards.forEach(card => {
        card.style.transform = `translateX(${offset})`;
    })
})

textslide();



