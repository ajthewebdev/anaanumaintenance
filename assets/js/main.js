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
  //// Anime                                           ///////
  ////////////////////////////////////////////////////////////
  function BlockReveal(el, options) {
    this.el = el;
    this.options = $.extend({}, this.options);
    $.extend(this.options, options);
    this.block__reveal();
  }

  BlockReveal.prototype.options = {
    options: {
      delay: 0
    }
  };

  BlockReveal.prototype.block__reveal = function(options) {
    options = options || this.options.options;
    var color = $(this.el+'>.block__content').css('color');

    $(this.el)
      .children('.block__reveal')
      .css('background-color', color );

    // console.log("delay "+this.el +" :"+ options.delay);

    var seq = anime.timeline({});
    var blockReveal = this.el + '>.block__reveal';
    var blockContent = this.el + '>.block__content';
    seq
      .add({
       targets: blockReveal,
       opacity: 1,
       scaleX: {
         value: [0, 1],
         easing: 'easeInQuint'
       },
       delay: options.delay
      })
      .add({
       targets: blockContent,
       opacity: '1',
       duration: 10
      })
      .add({
       targets: blockReveal,
       transformOrigin: '100% 50%',
       scaleX: {
         value: [1, 0],
         easing: 'easeInQuint',
         duration: 800
       }
      });
  };

  var animate__1 = new BlockReveal('#ani-1', {
    options: {
      delay: anime.random(0, 1000)
    }
  });
  var animate__2 = new BlockReveal('#ani-2', {
    options: {
      delay: anime.random(0, 1000)
    }
  });
  var animate__3 = new BlockReveal('#ani-3', {
    options: {
      delay: anime.random(0, 1000)
    }
  });
  var animate__4 = new BlockReveal('#ani-4', {
    options: {
      delay: anime.random(0, 1000)
    }
  });
  var animate__5 = new BlockReveal('#ani-5', {
    options: {
      delay: anime.random(0, 1000)
    }
  });
  var animate__7 = new BlockReveal('#ani-7', {
    options: {
      delay: anime.random(0, 1000)
    }
  });

  ////////////////////////////////////////////////////////////
  //// ScrollMonitor                                   ///////
  ////////////////////////////////////////////////////////////

  var watcher_1 = scrollMonitor.create( $('#projects-filter'));

  watcher_1.fullyEnterViewport(function() {
    console.log( 'I have entered the viewport' );
    var animate__6 = new BlockReveal('#ani-6', {
      options: {
        delay: anime.random(0, 450)
      }
    });
    watcher_1.destroy();
  });
});

