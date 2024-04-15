$(document).ready(function(){
	"use strict";

  if($('select').length){
    $('select').niceSelect();
  }

	/*
	==============================================================
	 COUNTDOWN  Script Start
	==============================================================
	*/
	
	if($('.countdown').length){
		$('.countdown').downCount({ date:'8/8/2023 12:00:00', offset: +1 });
	}
 


/*
    ==============================================================
       Progress Bar Script Start
    ============================================================== */  
    if($('.progressbar').length){
    $('.progressbar').each(function(){
      var t = $(this),
        dataperc = t.attr('data-perc'),
        barperc = Math.round(dataperc*5.56);
      t.find('.bar').animate({width:barperc}, dataperc*25);
      t.find('.label').append('<div class="perc"></div>');
      
      function perc() {
        var length = t.find('.bar').css('width'),
          perc = Math.round(parseInt(length)/5.56),
          labelpos = (parseInt(length)-2);
        t.find('.label').css('left', labelpos);
        t.find('.perc').text(perc+'%');
      }
      perc();
      setInterval(perc, 0); 
    });
  }


	/*
  ==============================================================
     Counter Script Start
  ==============================================================
  */
    if($('.counter').length){
        $('.counter').counterUp({
          delay: 20,
          time: 1000
        });
    }
	
	/*================================================
			slider start
	=================================================*/ 
	
	$('.bx-pager').bxSlider({
	  auto:true,
	  pagerCustom: '#bx-pager'
	});

  /*
    =======================================================================
         Pretty Photo Script Script
    =======================================================================
  */
    if($("a[data-rel^='prettyPhoto']").length){
      $("a[data-rel^='prettyPhoto']").prettyPhoto();
    }
 

});
    /*
    ==============================================================
        DL Responsive Menu
    ==============================================================
    */
    if(typeof($.fn.dlmenu) == 'function'){
      $('#kode-responsive-navigation').each(function(){
        $(this).find('.dl-submenu').each(function(){
        if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#' ){
          var parent_nav = $('<li class="menu-item kode-parent-menu"></li>');
          parent_nav.append($(this).siblings('a').clone());

          $(this).prepend(parent_nav);
        }
        });
        $(this).dlmenu();
      });
    }
	
	
	jQuery(document).ready(function() {
		jQuery('.tabs .tab-links a').on('click', function(e) {
			var currentAttrValue = jQuery(this).attr('href');

			// Show/Hide Tabs
			jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

			// Change/remove current tab to active
			jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

			e.preventDefault();
			
			// Show/Hide Tabs
			jQuery('.tabs ' + currentAttrValue).siblings().slideUp(800);
			jQuery('.tabs ' + currentAttrValue).delay(800).slideDown(800);
			
			// Show/Hide Tabs
			jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
		});
	});

  /*
  ==============================================================
      SLICK SLIDER 
  ==============================================================
  */
  
  if($('.main-banner-slider').length){
    $('.main-banner-slider').slick({
    dots:true,
		responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
		
		
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }
  
  if($('.action-form-slider').length){
    $('.action-form-slider').slick({
		slidesToShow: 4,
		responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
		
		
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }
  
  if($('.client1-slid').length){
    $('.client1-slid').slick({
		slidesToShow: 3,
		centerMode: true,
		autoplaySpeed:1500,
		autoplay:true,
		responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
		
		
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }
  
if($('.city_event_slider').length){
    $('.city_event_slider').slick({
    slidesToShow: 3,
    centerMode: true,
    autoplaySpeed:1500,
    autoplay:true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    
    
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }

  if($('.client3_slid').length){
    $('.client3_slid').slick({
		slidesToShow: 5,
		centerMode: true,
		autoplaySpeed:1500,
		autoplay:true,
		dots:true,
		responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
		
		
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }

  if($('.client3_slid').length){
    $('.client3_slid').slick({
    slidesToShow: 5,
    centerMode: true,
    autoplaySpeed:1500,
    autoplay:true,
    dots:true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    
    
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }


 $('.latest-slider-video').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.latest-slider-link'
});
$('.latest-slider-link').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.latest-slider-video',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
});


if($('.blog-list-slider').length){
    $('.blog-list-slider').slick({
    slidesToShow: 1,
    autoplaySpeed:1500,
    autoplay:true,
    dots:false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    
    
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }


  if($('.event-team-slider').length){
    $('.event-team-slider').slick({
    slidesToShow: 4,
    autoplaySpeed:1500,
    autoplay:true,
    dots:true,
    arrows:false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    
    
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }

  if($('.event-sponsor-slider').length){
    $('.event-sponsor-slider').slick({
    slidesToShow: 3,
    autoplaySpeed:1500,
    autoplay:true,
    dots:true,
    arrows:true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    
    
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }

	$("#employee_id").click(function(){
        $("#second_area").toggle(500);
		$("#second_area1").toggle(500);
		$("#second_area4").toggle(500);
    });
	
	
	$('#employee_id1').click(function() {
		$('#second_area2').toggle(500);
		$('#second_area3').toggle(500);
	});






  /*
    =======================================================================
            Map Script
    =======================================================================
  */
    if($('#map-canvas').length){
      google.maps.event.addDomListener(window, 'load', initialize);
    }
  /*
    =======================================================================
         Map Custom Style Script Script
    =======================================================================
  */
  function initialize() {
    var MY_MAPTYPE_ID = 'custom_style';
    var map;
    var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
    var featureOpts = [
      {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -400
            },
            {
                "lightness": 35
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -15
            },
            {
                "saturation": -37
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -15
            },
            {
                "saturation": -500
            }
        ]
    }
    ];

    var mapOptions = {
      zoom: 14,
      scrollwheel: false,
      center: brooklyn,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
    };


    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var styledMapOptions = {
      name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
    var marker=new google.maps.Marker({
      position:brooklyn,
      icon:'images/map.png'
      });

    marker.setMap(map);
  }