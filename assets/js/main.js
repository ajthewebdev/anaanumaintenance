$(function() {
  ////////////////////////////////////////////////////////////
  //// Isotope                                         ///////
  ////////////////////////////////////////////////////////////
  // init Isotope
  var $grid = $('.grid').isotope({
   // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    filter: '*',
    stagger: 30,
    getSortData: {
      date: '[data-time]'
    },
    sortBy: 'date',
    sortAscending: false
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
   $grid.isotope({ filter: '*' }); //Isotope filter
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

