
const btnsubmit = document.querySelector('.btnsubmit');

btnsubmit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(btnsubmit)
})

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

console.log(hiddenElements)