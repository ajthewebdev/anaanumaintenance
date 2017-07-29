$(function() {
   $('.lazy').lazy({
     effect: "fadeIn",
     effectTime: 2000,
     threshold: 0
   });

   // init Isotope
   var $grid = $('.grid').isotope({
     // options
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
   });

   // filter items on button click
   $('.filter-button-group').on( 'click', 'a', function() {
     var filterValue = $(this).attr('data-filter');
     $grid.isotope({ filter: filterValue });
   });

   $('.button-group a.button').on('click', function(){
    $('.button-group a.button').removeClass('active');
    $(this).addClass('active');
   });

   // init after grid images load
   $('.grid img').on('load', function() {
     $grid.isotope({filter: '*'});
    });
});

