


let is_play = false;

$(document).on('click', '.btn-open', function () {
  // console.log('cliked');
  // play_music();

  document.getElementById('btnMusic').classList.remove('is-hidden');
  document.getElementById('toTop').classList.remove('is-hidden');

  const landing = document.querySelector('.main-content');
  landing.classList.remove('is-hidden');
  landing.classList.add('animate__animated', 'animate__zoomIn');

  // landing.addEventListener('animationend', () => {
    const init = document.querySelector('.initial-view');
    init.style.setProperty('--animate-duration', '.5s');
    init.classList.add('animate__animated', 'animate__zoomOut', 'is-hidden');

    function handleAnimationEnd(event) {
      event.stopPropagation();
      landing.classList.remove('animate__animated', 'animate__zoomIn');
      // resolve('Animation ended');
      AOS.refresh();
    }
  
    landing.addEventListener('animationend', handleAnimationEnd, {once: true});

    

  $("html, body").animate({ scrollTop: 0 }, 500);
});
// });

// Get that hamburger menu cookin' //
document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }

  getCountdown();
});

function getCountdown(){
  console.log('cdo');
  var now = new Date();
  var day = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear() + 1;

  var nextyear = month + '/' + day + '/' + year + ' 07:07:07';
  var harih = '12/31/2022 17:00:00';

  $('.hero-countdown').countdown({
    date: harih, // TODO Date format: 07/27/2017 17:00:00
    offset: +7, // TODO Your Timezone Offset
    day: 'Hari',
    days: 'Hari'
  }, function () {
    // alert('Done!');
  });
}

$(document).on('click', '#btnMusic', function(){
  console.log(is_play);
  if (is_play) {
    pause_music();
    $(this).find('.icon').removeClass('fa-music').addClass('fa-pause');
  } else {
    play_music();
    $(this).find('.icon').removeClass('fa-pause').addClass('fa-music');
  }
});

function play_music(){
  document.getElementById("my_audio").play();
  is_play = true;
}

function pause_music(){
  document.getElementById("my_audio").pause();
  is_play = false;
}

$(document).on('click','#toTop',function() {
  $("html, body").animate({ scrollTop: 0 }, 500);
});

$(document).on('click', '.copied', function(){
  copyToClipboard('.no-rek');
});

function copyToClipboard(selector_text){
  console.time('time1');
	var temp = $("<input>");
  $("body").append(temp);
  temp.val($(selector_text).text()).select();
  document.execCommand("copy");
  temp.remove();
  console.timeEnd('time1');
}


// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > (window.outerHeight + (window.outerHeight/2))) {
    document.getElementById("toTop").style.display = "flex";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Preloader
// $(document).ready(function($) {
//   $(".preloader-wrapper").fadeOut();
//   $("body").removeClass("preloader-site");

// });
// $(window).load(function() {
//   var Body = $("body");
//   Body.addClass("preloader-site");
// });
