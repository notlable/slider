const articles = [
    {
        title: 'Pierwszy text',
        image: 'https://cdn.pixabay.com/photo/2021/11/30/08/24/strawberries-6834750__480.jpg'
    },
    {
        title: 'Drugi text',
        image: 'https://cdn.pixabay.com/photo/2022/05/26/19/14/child-7223632__340.jpg'
    },
    {
        title: 'Trzeci text',
        image: 'https://cdn.pixabay.com/photo/2022/06/07/03/25/rice-fields-7247360__340.jpg'
    },
]


const img = document.querySelector('img');
const h1 = document.querySelector('h1');
const dots = [...document.querySelectorAll('span')];

let active = 0;

img.src = articles[active].image;

const changeSlide = () => {
    active++;

    if (active === articles.length) {
        active = 0;
    }
    img.src = articles[active].image;
    h1.textContent = articles[active].title;
    changeDot();
}
const changeDot = () => {
    const index = dots.findIndex(dot => dot.classList.contains('active'));
    dots[index].classList.remove('active');
    dots[active].classList.add('active');
}

let intervalIndex = setInterval(changeSlide, 2000);

const keyChangeSlide = e => {
    if (e.code == 'ArrowLeft' || e.code == 'ArrowRight') {
        clearTimeout(intervalIndex);
        if (e.code == 'ArrowLeft') {
            active--;
        } else if (e.code == 'ArrowRight') {
            active++;
        }

        if (active == articles.length) {
            active = 0;
        }

        if (active < 0) {
            active = 2;
        }
        img.src = articles[active].image;
        h1.textContent = articles[active].title;
        changeDot();
        intervalIndex = setInterval(changeSlide, 2000);
    }
}



window.addEventListener('keydown', keyChangeSlide)