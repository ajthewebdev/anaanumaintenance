$(function() {
  ////////////////////////////////////////////////////////////
  //// Lazy load                                       ///////
  ////////////////////////////////////////////////////////////
  $('.lazy').lazy();


  ////////////////////////////////////////////////////////////
  //// Isotope                                         ///////
  ////////////////////////////////////////////////////////////

  // init Isotope
  var $grid = $('.grid').isotope({
   // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    filter: '.init',
    stagger: 30
    // transitionDuration: '0.8s',
    // hiddenStyle: {
    //   opacity: 0
    // },
    // visibleStyle: {
    //   animation: 'cover 1.5s ease-in forwards'
    // }
  });

  // filter items on button click
  $('.filter-button-group').on( 'click', 'a', function() {
   var filterValue = $(this).attr('data-filter');
   $grid.isotope({ filter: filterValue });
  });

  // button.active styling
  $('.filter-button-group a.button').on('click', function(){
  $('.filter-button-group a.button').removeClass('active');
  $(this).addClass('active');
  });

  // init after grid images load
  $('.grid img').on('load', function() {
   $grid.isotope({filter: '*'}); //Isotope filter
  });

  ////////////////////////////////////////////////////////////
  //// Toggle About Info                                    /////
  ////////////////////////////////////////////////////////////
  $('.hero-btn').on('click', function() {
    if ($('.hero-btn').text() == "Learn more")
       $(this).text("Collapse info.")
    else
       $(this).text("Learn more");

    $('.header-about').slideToggle("slow");
  });
});

