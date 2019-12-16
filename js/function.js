$(document).ready(function () {
  $('.testi-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
  });

  tabs();
  menu();
});

function tabs() {
  $('[data-tabs]').on('click', function (event) {
    event.preventDefault();
    let elId = $(this).attr('href');
    console.log(elId);
    $('[data-tabs]').parent().removeClass('activ');
    $(this).parent().addClass('activ');

    $('[data-tabs-pane]').removeClass('activ');
    $(elId).addClass('activ');
  });

}

// function menu() {
//   $('.navbar__mobileToggle').on('click', function () {
//     $('.navbar').toggleClass('open');
//   });  
// }
function menu() {
  $('.nav__icon').on('click', function () {
    $(this).closest('nav')
    .toggleClass('nav_state_open');
  });


  $('.nav__links-item').on('click',function () {
    $(this).closest('nav').removeClass('nav_state_open');
  });
}
