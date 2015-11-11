$(function() {

  var navOffsetTop = $('.navbar').offset().top;

  var resize = function() {
    $('body').removeClass('has-docked-nav');
    navOffsetTop = $('.navbar').offset().top
    onScroll();
  };

  var onScroll = function() {
    if (navOffsetTop < $(window).scrollTop() && !$('body').hasClass('has-docked-nav')) {
      $('body').addClass('has-docked-nav');
      console.log('added docked nav');
    }
    if (navOffsetTop > $(window).scrollTop() && $('body').hasClass('has-docked-nav')) {
      $('body').removeClass('has-docked-nav');
      console.log('removed docked nav');
    }
  };

  $(window).on('scroll', onScroll);
  $(window).on('resize', resize);

});
