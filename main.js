const articles = [
    {
        title: 'Pierwszy text',
        image: 'https://cdn.pixabay.com/photo/2020/02/25/09/57/road-4878453__480.jpg'
    },
    {
        title: 'Drugi text',
        image: 'https://cdn.pixabay.com/photo/2021/05/12/10/09/common-blue-6247877__340.jpg'
    },
    {
        title: 'Trzeci text',
        image: 'https://cdn.pixabay.com/photo/2022/01/29/06/07/couple-6976409__340.jpg'
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
    
}