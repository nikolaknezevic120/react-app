import $ from 'jquery';

//SCROLL TO RIGHT
function animateRightRow(img, from, to){
    if(from >= to){         
        return;  
    }
    else {
        img.css({ marginLeft: from});
        setTimeout(function(){
            animateRightRow(img, from + 1, to);
        }, 2) 
    }
}
    
function moveElement(){
    const firstLastWidthForSlide = $('.first-slider-move').children().last().outerWidth();
    const secondLastWidthForSlide = $('.second-slider-move').children().last().outerWidth();
    
    animateRightRow($('.first-slider'), 0, firstLastWidthForSlide + 10 );
    animateRightRow($('.second-slider-move'), 0, secondLastWidthForSlide + 10 );
        
    return;
}
    
function replaceToStart(){
    $('.first-slider-move').children().first().before($('.first-slider-move').children().last());
    $('.second-slider-move').children().first().before($('.second-slider-move').children().last());
}

export default function animate_to_right(){

//RIGHT BUTTON ON CLICK FUNCTION
$('#btn_left').prop('disabled', true);
$('#btn_right').prop('disabled', true);

moveElement();

setTimeout(() => {
    replaceToStart();
    $('.first-slider').css({ marginLeft: "0"});
    $('.second-slider-move').css({ marginLeft: "0"});
    $('#btn_left').prop('disabled', false);
    $('#btn_right').prop('disabled', false);
}, 2000 )};