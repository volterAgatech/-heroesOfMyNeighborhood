
/*
получаем блоки внутри которых будут двигатся карточки героев
отсуп справа высчитывается динамически 
*/
const goUpList = document.querySelector('.goup');
const goDownList = document.querySelector('.godown');
const aboutRight = document.querySelector('.about__right');
let max = 0;
/*
значение переменной right0 нужно высчитывать в зависимости от
изначального количества элементов от max
*/
let right0 = -100;//n+= -50 * max - 2

/*
получаем максимальное значение элементов героев
может быть разное значение с права и с лева
*/
max = Math.max(goDownList.querySelectorAll('li').length, goUpList.querySelectorAll('li').length)
console.log(max);
/*
Базовый отсуп 
*/
aboutRight.style.right = right0 + 'px';
/*
Отступ в зависимости от кол элементов
*/
const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
console.log(viewport_width);
if (max > 2 && viewport_width > 1200) {
    aboutRight.style.right = right0 + (max - 2) * 50 + 'px';
} else if(viewport_width < 920){
    aboutRight.style.right = 'auto';
}else
{
    aboutRight.style.right = right0 +'px';
}
console.log();