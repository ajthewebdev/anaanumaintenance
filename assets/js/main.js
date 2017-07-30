$(function() {
   $('.lazy').lazy({
      effect: "show",
      threshold: 0
   });

   // init Isotope
   var $grid = $('.grid').isotope({
     // options
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      transitionDuration: '0.8s'
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


   var blockRevealer = anime.timeline({
    // loop: true
   });

   blockRevealer
   .add({
    targets: '.block__reveal',
    opacity: 1,
    scaleX: {
      value: [0, 1],
      duration: 600,
      easing: 'easeInOutExpo'
    }
   })
   .add({
    targets: '.block__content',
    opacity: '1',
    duration: 100,
   })
   .add({
    targets: '.block__reveal',
    transformOrigin: '100% 50%',
    scaleX: {
      value: [1, 0],
      easing: 'easeInOutExpo'
    }
   });
});

