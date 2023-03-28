import $ from 'jquery';

//SCROLL TO LEFT
function replaceToEnd(){
  $('.first-slider-move').children().last().after($('.first-slider-move').children().first());
  $('.second-slider-move').children().last().after($('.second-slider-move').children().first());
}


export default function animation_to_left(){
  
//LEFT BUTTON ON CLICK FUNCTION
    $('#btn_left').prop('disabled', true);
    $('#btn_right').prop('disabled', true);
    replaceToEnd();
      
    $('.first-slider-move').children().last().addClass("animate-image");
    $('.second-slider-move').children().last().addClass("animate-image");
      
    setTimeout( () => {
        $('#btn_left').prop('disabled', false);
        $('#btn_right').prop('disabled', false);
        $('.first-slider-move').children().last().removeClass("animate-image");
        $('.second-slider-move').children().last().removeClass("animate-image");
  }, 2000);
}