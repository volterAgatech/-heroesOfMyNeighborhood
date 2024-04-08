const btnNext = document.querySelector('.arrow.next');
const btnPrev = document.querySelector('.arrow.prev');

const allHeroesText = document.querySelectorAll('.header__about-hero');
const sliderInfo = document.querySelectorAll('.header__slider-info');
const allHeroesImg = document.querySelectorAll('.heroimg');
//activehero
allHeroesText[0].classList.add('activehero');
allHeroesImg[0].classList.add('activehero');
let state = 0;
//проверять кнопки

//1. определяем высоту header__about-hero activehero
let size = allHeroesText[0].clientHeight;
sliderInfo[0].style.height = size + 64 + 'px';
/*
функция проверяет состоянеие кнопок
*/
function checkStateBTN() {

    /*
    создаем анимацию изменения размера блока информации о герое 
    в зависимости от наполнения
    */
    size = allHeroesText[state].clientHeight;
    sliderInfo[0].style.height = size + 64 + 'px';

    if (state == allHeroesText.length - 1) {
        btnNext.classList.add('disable');

    } else {
        btnNext.classList.remove('disable');

    }
    if (state == 0) {
        btnPrev.classList.add('disable');

    } else {
        btnPrev.classList.remove('disable');
    }
}

/*
функция движения слайдера вперед
*/
function goNextHero() {
    btnNext.addEventListener('click', () => {

        if (state < allHeroesText.length - 1) {
            state++;

            allHeroesText.forEach(element => {
                element.classList.remove('activehero');
            });
            allHeroesImg.forEach(element => {
                element.classList.remove('activehero');
            });

            allHeroesText[state].classList.add('activehero');
            allHeroesImg[state].classList.add('activehero');
            checkStateBTN();
        }


    })
}
/*
функция движения слайдера назад
*/
function goPrevHero() {
    btnPrev.addEventListener('click', () => {

        if (state > 0) {
            state--;

            allHeroesText.forEach(element => {
                element.classList.remove('activehero');
            });
            allHeroesImg.forEach(element => {
                element.classList.remove('activehero');
            });

            allHeroesText[state].classList.add('activehero');
            allHeroesImg[state].classList.add('activehero');
            checkStateBTN();
        }


    })
}
/*
функция автоматического движения слайдера
имитация нажатия кнопки вперед
*/
function autoSlider() {
    setInterval(() => {

        if (state != allHeroesText.length - 1) {
            btnNext.click();

        } else {
            state = -1;
        }
    }, 5000);
}
goNextHero();
goPrevHero();
autoSlider();


/*
код отработки всплывающего окна
*/

const reedInter = document.querySelectorAll('.reedinter');
const popup = document.querySelector('.header__popup');
const krest = document.querySelector('.krest');

reedInter.forEach(e => {
    e.addEventListener('click', () => {
        popup.classList.add('show');
        document.body.style.transition = 'none';
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = "15px";
    })
    e.addEventListener('click', () => {
        popup.classList.add('show');
        document.body.style.transition = 'none';
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = "15px";
    })
});

krest.addEventListener('click', () => {
    popup.classList.remove('show');
    document.body.style.overflow = "auto";
    document.body.style.marginRight = "0";
})
/*
псевдо добавление новых элементов
*/
let plus6 =
   `
   <li class='news__elem reedinter' data-news='1'>
   <img src='/src/img/news/1.png' alt=''>
   <p class='news__title'>Интервью с «Героем моего района» Анастасией Юровой</p>
   <p class='small'>4 марта 2024</p>
</li>
<li class='news__elem reedinter' data-news='2'>
   <img src='/src/img/news/2.png' alt=''>
   <p class='news__title'>Интервью с «Героем моего района» Татьяной Галиевой</p>
   <p class='small'>20 февраля 2024</p>
</li>
<li class='news__elem reedinter' data-news='3'>
   <img src='/src/img/news/3.png' alt=''>
   <p class='news__title'>Интервью с «Героем моего района» Дмитрием Лесняком</p>
   <p class='small'>14 феврлая 2024</p>
</li>
<li class='news__elem reedinter' data-news='1'>
   <img src='/src/img/news/1.png' alt=''>
   <p class='news__title'>Интервью с «Героем моего района» Анастасией Юровой</p>
   <p class='small'>4 марта 2024</p>
</li>
<li class='news__elem reedinter' data-news='2'>
   <img src='/src/img/news/2.png' alt=''>
   <p class='news__title'>Интервью с «Героем моего района» Татьяной Галиевой</p>
   <p class='small'>20 февраля 2024</p>
</li>
<li class='news__elem reedinter' data-news='3'>
   <img src='/src/img/news/3.png' alt=''>
   <p class='news__title'>Интервью с «Героем моего района» Дмитрием Лесняком</p>
   <p class='small'>14 феврлая 2024</p>
</li>
`;
let showmore = document.querySelector('.showmore');
let newsList = document.querySelector('.news__list');
showmore.addEventListener('click', () => {
    newsList.insertAdjacentHTML("beforeend",plus6);
    reedInter = document.querySelectorAll('.reedinter');
})

/*карта героев*/
ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('mapyandex', {
            center: [55.76, 37.64],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 32,
            clusterDisableClickZoom: true
        });

    // Чтобы задать опции одиночным объектам и кластерам,
    // обратимся к дочерним коллекциям ObjectManager.
    
    objectManager.objects.options.set('preset', 'islands#redCircleDotIcon');
    
    // objectManager.objects.options.set( {
    //    // iconLayout: 'default#image',
    //     iconImageHref: '/src/img/map.png',
    //     iconImageSize: [20,20],
       
    // });
    myMap.geoObjects.add(objectManager);

    $.ajax({
        url: "/src/js/data.json"
    }).done(function(data) {
        objectManager.add(data);
    });

}