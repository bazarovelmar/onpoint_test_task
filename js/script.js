

let thScroll = document.getElementsByClassName('.scroll_thirst_text'),
    secScroll = document.getElementById('second_arrow'),
    yearsSlide = document.getElementById('years');


    function handleButtonClick() {
        secScroll.scrollIntoView({block: "center", behavior: "smooth"});
     }
     function handleButtonCl() {
        yearsSlide.scrollIntoView({block: "center", behavior: "smooth"});
     }


      
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    
    
    let navSec = document.getElementById('second_scrl');
    let navTh = document.getElementById('thirst_scrl');
    let navSc = document.getElementById('third_scrl');
    
    
    if (scrollDistance > 560 && scrollDistance < 1300) {
        navSec.classList.add('active');
    } else {
        navSec.classList.remove('active');
    }
    if (scrollDistance < 760) {
        navTh.classList.remove('active');
    }
    if (scrollDistance >= 0 && scrollDistance < 559) {
        navTh.classList.add('active');
    }
    if (scrollDistance >= 1300) {
        navSc.classList.add('active');
    } else {
        navSc.classList.remove('active');
    }

});


let unputRange = document.getElementById('range'),
    thSlide = document.getElementById('thirst'),
    secSlide = document.getElementById('second'),
    thdSlide = document.getElementById('third');

    console.log(thSlide);

document.getElementById("range").addEventListener("change", function() {

    if(this.value == 0) {

        secSlide.classList.remove('active_image2');
        secSlide.classList.add('active_image2_prev');
        thSlide.classList.remove('active_image');
        thSlide.classList.remove('active_image_prev');
        thSlide.classList.remove('active_image_next');
        thSlide.classList.remove('active_im');
        
        
        thdSlide.classList.remove('active_image3');
    }
    
    if(this.value == 1) {
        secSlide.classList.remove('active_image2_prev');
        secSlide.classList.remove('active_image2_next');
        secSlide.classList.add('active_image2');
        thSlide.classList.add('active_image');
        thdSlide.classList.add('active_image3');
        thdSlide.classList.remove('active_image3_prev');
        
        
    }

    if(this.value == 2) {
        thSlide.classList.add('active_im');
        thSlide.classList.remove('active_image');
        secSlide.classList.remove('active_image2');
        secSlide.classList.remove('active_image2_prev');
        secSlide.classList.add('active_image2_next');
        thdSlide.classList.add('active_image3_prev');
        thdSlide.classList.remove('active_image3');
        secSlide.classList.remove('active_image2');

        
        

        


        

    }
  });






    
    
    
    
    

 


      