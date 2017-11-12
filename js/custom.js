
// $('.photo-item').slick({
//   infinite: true,
//   slidesToShow: 1,
//     autoPlay: true,
//     speed: 500,    
//     arrows:true
    
// });


$("#showhide").click(function () {
       $(".search2").animate({width:'toggle'},250);
          $(this).toggleClass("closed");
    });  

$(window).load(function() {
    $("html, body").niceScroll();

////go to

$(document).on('click','.goTo', function(event) {
    event.preventDefault();
    var target = "#" + this.getAttribute('data-go-to');
    $('html, body').animate({
    scrollTop: $(target).offset().top
    }, 1000);
});
});

$(document).ready(function(){

$('.photo-item').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  speed: 500,
  pauseOnHover: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
  responsive: [
    {
      breakpoint: 568,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
}); 
});

// $(window).load(function(){
//     var container = $('#container');

//     container.isotope({
//       itemSelector : '.element',
//       filter: '.isotape-valueitem',
//       resizable: false,
//       masonry: {
//         columnWidth: container.width() / 4
//       },
//       getSortData : {
//         brand : function( e ) { return getSortOrder(e, 'brand'); },
//         print : function( e ) { return getSortOrder(e, 'print'); },
//         digital : function( e ) { return getSortOrder(e, 'digital'); }
//       }
//     });

//     function getSortOrder(item, attr){
//         var a = item.attr('data-sort-' + attr);
//         if(a != undefined && a.length > 0)
//           return a;
        
//         return 'ZZZZZZZZZZZZZZZZZZ'        ;
//     };

    
//     $(window).smartresize(function(){
//       container.isotope({
//         masonry: {
//           columnWidth: container.width() / 4
//         }
//       });
//     });
      
    
//       var optionSets = $('#options .option-set'),
//           optionLinks = optionSets.find('a');

//       optionLinks.click(function(){
//         var t = $(this);
//         if ( t.hasClass('selected') ) {
//           return false;
//         }
//         var optionSet = t.parents('.option-set');
//         optionSet.find('.selected').removeClass('selected');
//         t.addClass('selected');
  
//         var options = {filter:''},
//             key = optionSet.attr('data-option-key'),
//             value = t.attr('data-option-value');

//         value = value === 'false' ? false : value;
//         options[ key ] = value;
//         container.isotope( options );        
//         return false;
//       });
     
//     var sortMenu = $('#sort-by a');
//     $('#shuffle a').click(function(){      
//       container.isotope({
//         sortBy: 'random',
//         filter:'.isotape-valueitem'        
//       });
//       sortMenu.removeClass('selected');
//       sortMenu.find('[data-option-value="random"]').addClass('selected');
//       return false;
//     });
    
//   });
// //]]>  

//gallery isotop

$(document).ready(function() {
  
  var $container = $('#gallery_row'),
      $filterLinks = $('#filters a');
  
  $container.isotope({
    itemSelector: '.item',
    filter: '*'
  });
  
  $filterLinks.click(function(){
    var $this = $(this);
    
    // don't proceed if already selected
    if ( $this.hasClass('selected') ) {
      return;
    }
    
    $filterLinks.filter('.selected').removeClass('selected');
    $this.addClass('selected');
    
    // get selector from data-filter attribute
    selector = $this.data('filter');
    
    $container.isotope({
      filter: selector
    });
      
  });
  
});

/////



//fancy box

$(document).ready(function() {
    $('.fancybox').fancybox();
    $(".fancybox-effects-a").fancybox({
        helpers: {
            title : {
                type : 'outside'
            },
            overlay : {
                speedOut : 0
            }
        }
    });
    
    /////right fixed menu start
    $(".bar_icon").click(function(){
        $('body').toggleClass("addbody");
    })
    $(".body_overlay").click(function(){
        $('body').removeClass("addbody");
    })
    /////right fixed menu ens

});

/////


$(document).ready(function(){
    var $container = $('#gallery_row');
    $container.isotope({
        filter: '*',
        //layoutMode : '',
            animationOptions: {
         duration: 750,
         easing: 'linear',
         queue: false,

       }
    });
});

$('.custom-btm').click(function(){
   $(this).toggleClass('active');
   $(this).parent().next().toggleClass('active');
 });