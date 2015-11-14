$(function() {

  var navOffsetTop = $('.navbar').offset().top;

  var initPhotoGrid = function() {
    var $grid = $('.grid');
    $grid.imagesLoaded( function(){
      $grid.masonry({
        itemSelector : '.grid-item'
      });
    });
  };

  var resize = function() {
    $('body').removeClass('has-docked-nav');
    navOffsetTop = $('.navbar').offset().top
    onScroll();
    initPhotoGrid();
  };

  var onScroll = function() {
    if (navOffsetTop < $(window).scrollTop() && !$('body').hasClass('has-docked-nav')) {
      $('body').addClass('has-docked-nav');
    }
    if (navOffsetTop > $(window).scrollTop() && $('body').hasClass('has-docked-nav')) {
      $('body').removeClass('has-docked-nav');
    }
  };

  $(window).on('scroll', onScroll);
  $(window).on('resize', resize);
  initPhotoGrid();

});
