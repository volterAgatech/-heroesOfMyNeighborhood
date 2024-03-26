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

const reedInter = document.querySelector('.reed-more.reedinter');
const popup = document.querySelector('.header__popup');
const krest = document.querySelector('.krest');
reedInter.addEventListener('click', () => {
    popup.classList.add('show');
    document.body.style.transition = 'none';
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = "15px";
})
krest.addEventListener('click', () => {
    popup.classList.remove('show');
    document.body.style.overflow = "auto";
    document.body.style.marginRight = "0";
})