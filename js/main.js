$(function() {

  var navOffsetTop = $('.navbar').offset().top;

  // set a docked nav when no offset
  if (navOffsetTop === 0) {
    $('body').addClass('has-docked-nav');
  }

  var onScroll = function() {
    if (navOffsetTop < $(window).scrollTop() && !$('body').hasClass('has-docked-nav')) {
      $('body').addClass('has-docked-nav');
    }
    if (navOffsetTop > $(window).scrollTop() && $('body').hasClass('has-docked-nav')) {
      $('body').removeClass('has-docked-nav');
    }
  };

  $(window).on('scroll', onScroll);

});
