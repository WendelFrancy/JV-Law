
const btnsubmit = document.querySelector('.btnsubmit');

btnsubmit.addEventListener('click', (e) => {
    e.preventDefault();
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));