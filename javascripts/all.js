// require_tree .
$(window).load(function(){
    console.log($(this).width())

    if (($(this).width()) < 1000) {
      $('#header').removeClass('header').addClass('mobile-header');
      $('#navigation').removeClass('navigation').addClass('mobile-navigation');
      $('#gallery-section').removeClass('gallery-section').addClass('mobile-gallery-section');
      $('#mast1').addClass('mobile-navigation');
      $('#mast2').addClass('mobile-navigation');
    }

});


$(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()) {
      $("#navigation").addClass("sticky");
    } else {
      $("#navigation").removeClass("sticky");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= ($(".corinne").offset().top) - 2) {
      $("#corinne-pic").addClass("hover");
    } else {
      $("#corinne-pic").removeClass("hover");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= ($(".albert").offset().top) - 2) {
      $("#albert-pic").addClass("hover");
      $("#corinne-pic").removeClass("hover");
    } else {
      $("#albert-pic").removeClass("hover");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= ($(".angie").offset().top) - 2) {
      $("#angie-pic").addClass("hover");
      $("#albert-pic").removeClass("hover");
    } else {
      $("#angie-pic").removeClass("hover");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= ($(".matt").offset().top) - 2) {
      $("#matt-pic").addClass("hover");
      $("#angie-pic").removeClass("hover");
    } else {
      $("#matt-pic").removeClass("hover");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= ($(".nick").offset().top) - 2) {
      $("#nick-pic").addClass("hover");
      $("#matt-pic").removeClass("hover");
    } else {
      $("#nick-pic").removeClass("hover");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= ($(".riana").offset().top) + ($(".riana").height())) {
      $("#riana-pic").removeClass("hover");
      $("#nick-pic").removeClass("hover");
    } else if ($(this).scrollTop() >= ($(".riana").offset().top) - 2) {
      $("#riana-pic").addClass("hover");
      $("#nick-pic").removeClass("hover");
    } else {
      $("#riana-pic").removeClass("hover");
    }
});

$(document).ready(function() {
  $("#ga-logo").on('click', function() {
    $('html, body').animate({scrollTop:$(window).height()}, 1000);
    //window.scrollTo(0, $(window).height())
  });
  $("#corinne").on('click', function() {
    $('html, body').animate({scrollTop:$(".corinne").offset().top}, 1000);
  });
  $("#albert").on('click', function() {
    $('html, body').animate({scrollTop:$(".albert").offset().top}, 1000)
  });
  $("#angie").on('click', function() {
    $('html, body').animate({scrollTop:$(".angie").offset().top}, 1000)
  });
  $("#matt").on('click', function() {
    $('html, body').animate({scrollTop:$(".matt").offset().top}, 1000)
  });
  $("#nick").on('click', function() {
    $('html, body').animate({scrollTop:$(".nick").offset().top}, 1000)
  });
  $("#riana").on('click', function() {
    $('html, body').animate({scrollTop:$(".riana").offset().top}, 1000)
  });
  $("#gallery").on('click', function() {
    $('html, body').animate({scrollTop:$(".gallery").offset().top}, 1000)
  });
  $("#top").on('click', function() {
    $('html, body').animate({scrollTop: 0}, 1000)
  });
});
