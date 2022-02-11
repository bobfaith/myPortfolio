const viewButton = document.getElementById('wiew_more');
const dynamicBody = document.getElementsByClassName('dynamic-body');
const back_two = document.getElementById('two_back');

const first = document.getElementById('one');
const second = document.getElementById('two');
const third = document.getElementById('three');


window.addEventListener('load', ()=> {
    const fadeRight = document.getElementsByClassName('fade_right') ;
    const fadeLeft = document.getElementsByClassName('fade_left') ;

    setTimeout(()=> {
        fadeLeft[0].classList.add('appear');
        fadeRight[0].classList.add('appear');
    }, 200)



} )

viewButton.addEventListener('click', ()=> {
    first.classList.add('hide');
    second.classList.remove('hide');
})

back_two.addEventListener('click', ()=> {
    second.classList.add('hide');
    first.classList.remove('hide');

})

document.getElementById('two_skill').addEventListener('click', ()=> {
    second.classList.add('hide');
    third.classList.remove('hide');
})

document.getElementById('three_back').addEventListener('click', ()=> {
    second.classList.remove('hide');
    third.classList.add('hide');
})