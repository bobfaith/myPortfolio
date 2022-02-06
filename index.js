window.addEventListener('load', ()=> {
    const fadeRight = document.getElementsByClassName('fade_right') ;
    const fadeLeft = document.getElementsByClassName('fade_left') ;

    setTimeout(()=> {
        fadeLeft[0].classList.add('appear');
        fadeRight[0].classList.add('appear');
    }, 200)

} )