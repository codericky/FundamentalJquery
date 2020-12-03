$(function() {
  // Use the fadeOut() method to hide <img> elements
  $('#sunset').slideUp(10000);
  $('#sunset1').fadeOut(10000);
  $('#sunset2').hide(10000);
 // baris ke dua
 //sunset3
 $('.sunset3').click(function(){
  $('#sunset3').hide(8000);
  $('.sunset3').hide();
});
//sunset4
$('.sunset4').click(function(){
    $('#sunset4').fadeOut(5000);
    $('.sunset4').hide();
  });
//sunset5
$('.sunset5').click(function(){
    $('#sunset5').slideUp(5000);
    $('.sunset5').hide();
  
  });

  
});
