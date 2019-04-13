$(document).ready(function(){
  //============================responsive-menu-icon==========================//
  $('.bars').click(function(){
    if($(this).attr('data-open') == 'open'){
      var responsiveMenu = $('.responsive-menu');
      $(responsiveMenu).slideDown('normal');
      $(this).find('i').removeClass('fa-bars');
      $(this).find('i').addClass('fa-times');
      $(this).attr('data-open','close');}
    else {
      $('.responsive-menu').slideUp('normal');
      $(this).find('i').removeClass('fa-times');
      $(this).find('i').addClass('fa-bars');
      $(this).attr('data-open','open');
    }
  });
//=======================scroll navbar===================//
  $(window).scroll(function(){
    if($(this).scrollTop() > 99){
      $('.navigation').addClass('style-navigation');
     $('.navigation .navbar-nav .navbar-brand').addClass('style-brand')
      $('.navigation nav').css('padding-top','10px').css('padding-bottom','10px');
    } else {
      $('.navigation').removeClass('style-navigation');
      $('.navigation .navbar-nav .navbar-brand').removeClass('style-brand');
      $('.navigation nav').css('padding-top','25px').css('padding-bottom','25px');
    }
  });
//=======================counter===================//
    $('.counter .number').counterUp({
      delay: 10,
      time:2500,
    });

});
