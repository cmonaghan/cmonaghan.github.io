$(function() {

  var navOffsetTop = $('.navbar').offset().top;

  var initPhotoGrid = function() {
    var $grid = $('.grid');
    $grid.imagesLoaded( function(){
      $grid.masonry({
        itemSelector : '.grid-item',
        gutterWidth: 7
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

  // TODO: load photos dynamically by reading directories

  $(window).on('scroll', onScroll);
  $(window).on('resize', resize);
  initPhotoGrid();

  // Photoswipe
  // var pswpElement = document.querySelectorAll('.pswp')[0];

  // // build items array
  // var items = [
  //     {
  //         src: 'http://media2.popsugar-assets.com/files/2015/05/11/825/n/1922398/d5db8e92_shutterstock_239338216.xxxlarge_2x.jpg',
  //         w: 600,
  //         h: 400
  //     },
  //     {
  //         src: 'http://localhost:8000/photography/graffiti/IMG_2142.png',
  //         w: 600,
  //         h: 900
  //     }
  // ];

  // // define options (if needed)
  // var options = {
  //     // optionName: 'option value'
  //     // for example:
  //     index: 0 // start at first slide
  // };

  // // Initializes and opens PhotoSwipe
  // var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
  // gallery.init();

});
