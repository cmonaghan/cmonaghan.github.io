$(function() {

  var navOffsetTop = $('.navbar').offset().top;

  var initPhotoGridLayout = function(cb) {
    var $grid = $('.grid');
    $grid.imagesLoaded( function(){
      $grid.masonry({
        itemSelector : '.grid-item',
        gutterWidth: 7
      });
      cb();
    });
  };

  var resize = function() {
    $('body').removeClass('has-docked-nav');
    navOffsetTop = $('.navbar').offset().top
    onScroll();
    initPhotoGridLayout();
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
  initPhotoGridLayout(function() {
    // loads soundcloud iframes after photo grid is rendered since they are slow
    // piano
    $('iframe#cleansing-rain').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/39186089&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false');
    $('iframe#paris').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/16379629&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false');
    $('iframe#awkward-times').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/13238236&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false');
    $('iframe#pebbles-coffee-house').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/13237671&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false');
    $('iframe#seattle').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/13238314&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false');
    // synth
    $('iframe#castles').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/13239568&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false');
    $('iframe#you-dont-know-me-anymore').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/13239636&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false');
    $('iframe#dance-song').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/194734069&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false');
    $('iframe#wolf-taxi').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/13239291&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false');
    $('iframe#cats-are-furry').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/13239224%3Fsecret_token%3Ds-JJV3z&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false');
    $('iframe#synth1').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/13238600&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false');
  });


});
