(function($) {
    console.log();
    "use strict";
    var KAMF_D_DAY = "2017-04-07 00:00:00";

    var SCHEDULES_INFORMATION = [{
        "schedules_image": "images/schedule.jpeg",
        "artists_image": "images/artists/1.jpeg",
        "start_time": "5:00 pm",
        "end_time": "6:00 pm",
        "location": "중앙무대",
        "external_link": "http://groov.fm/ch/2017kamf-Adios_Audio",
        "name": "아디오스오디오",
        "hit_song" : "<a target='_blank' href='https://www.youtube.com/watch?v=9qnyGaT9gv8'>밤밤밤</a>",
        "day": "Day1"
    },{
        "schedules_image": "images/schedule.jpeg",
        "artists_image": "images/artists/2.jpeg",
        "start_time": "6:00 pm",
        "end_time": "7:00 pm",
        "location": "중앙무대",
        "external_link": "http://groov.fm/ch/KAMF2017-SEENROOT",
        "name": "신현희와 김루트",
        "hit_song" : "<a target='_blank' href='https://www.youtube.com/watch?v=OmjN_b07syo'>오빠야</a>",
        "day": "Day1"
    },{
        "schedules_image": "images/schedule.jpeg",
        "artists_image": "images/artists/3.jpeg",
        "start_time": "7:00 pm",
        "end_time": "8:00 pm",
        "location": "중앙무대",
        "external_link": "http://groov.fm/ch/2017kamf-The_VANE",
        "name": "더 베인",
        "hit_song" : "<a target='_blank' href='https://www.youtube.com/watch?v=V80zsb8Az9Y'>Identity</a>",
        "day": "Day1"
    },{
        "schedules_image": "images/schedule.jpeg",
        "artists_image": "images/artists/4.jpeg",
        "start_time": "8:00 pm",
        "end_time": "9:00 pm",
        "location": "중앙무대",
        "external_link": "http://groov.fm/ch/2017kamf-BOLSA",
        "name": "볼빨간 사춘기",
        "hit_song" : "<a target='_blank' href='https://www.youtube.com/watch?v=9U8uA702xrE'>우주를 줄게</a>",
        "day": "Day1"
    },{
        "schedules_image": "images/schedule.jpeg",
        "artists_image": "images/artists/5.jpeg",
        "start_time": "5:00 pm",
        "end_time": "6:00 pm",
        "location": "중앙무대",
        "external_link": "http://groov.fm/ch/2017KAMF-NOXX",
        "name": "녹스",
        "hit_song" : "<a target='_blank' href='https://www.youtube.com/watch?v=wfyYh3QEVtw'>Tonight</a>",
        "day": "Day2"
    },{
        "schedules_image": "images/schedule.jpeg",
        "artists_image": "images/artists/6.jpeg",
        "start_time": "6:00 pm",
        "end_time": "7:00 pm",
        "location": "중앙무대",
        "external_link": "http://groov.fm/ch/2017KAMF-Romantic_Punch",
        "name": "로맨틱 펀치",
        "hit_song" : "<a target='_blank' href='https://www.youtube.com/watch?v=OsGCxI6l5T8'>몽유병</a>",
        "day": "Day2"
    },{
        "schedules_image": "images/schedule.jpeg",
        "artists_image": "images/artists/7.jpeg",
        "start_time": "7:00 pm",
        "end_time": "8:00 pm",
        "location": "중앙무대",
        "external_link": "http://groov.fm/ch/2017KAMF-NELL",
        "name": "넬",
        "hit_song" : "<a target='_blank' href='https://www.youtube.com/watch?v=83IfZhO4Pd0'>기억을 걷는 시간</a>",
        "day": "Day2"
    },{
        "schedules_image": "images/schedule.jpeg",
        "artists_image": "images/artists/8.jpeg",
        "start_time": "8:00 pm",
        "end_time": "9:00 pm",
        "location": "중앙무대",
        "external_link": "http://groov.fm/ch/KAMF2017-Crying-Nut",
        "name": "크라잉넛",
        "hit_song" : "<a target='_blank' href='https://www.youtube.com/watch?v=RgLerhyQtYM'>말달리자</a>",
        "day": "Day2"
    }];

    var DESCRIPTIONS = {
        "title": "KAMF (KAIST Art & Music Festival) 은 올해로 6회 째를 맞는 KAIST의 축제입니다.<br>인디 밴드들의 무대와 각종 부스, 그리고 일반인들이 꾸미는 무대인 오픈스테이지로 구성되어 있습니다.",
        "schedules": "4/7(금), 4/8(토) 이틀간 진행됩니다.<br>본 무대는 5시 부터, 부스 및 오픈스테이지는 12시부터 운영됩니다.",
        "artists" : "2017 KAMF의 무대를 봄 향기와 함께 빛내 줄 아티스트들 입니다.",
        "gallery" : "생생한 KAMF의 현장을 담았습니다."
    };

    var insertSchedulesInfomation = function(infos) {
        var day1 = $("#schedule-day-1");
        var day2 = $("#schedule-day-2");

        infos.forEach(function(info, index){
        	if(info.day.toLowerCase() !== 'day1') return;
            var current = day1.append('<li><div class="avatar"><a href="info.external_link"><img width="262" height="262" src="images/schedule.jpeg" alt="speaker5" /></a></div><div class="speaker_ds"><h6><a href="info.external_link">info.name</a></h6><div class="meta clearfix"><div class="pull-left"><span class="time"><i class="fa fa-clock-o"></i><span class="tribe-event-date-start">info.start_time</span> - <span class="tribe-event-date-end">info.end_time</span> </span><span class="name"><i class="fa fa-music"></i><span>info.hit_song</span></span></div></div></div></li>').children("li").last();

            current.find("a").attr('href', info.external_link);
            current.find("img").attr("src", info.schedules_image);
            current.find("h6 > a").html(info.name);
            current.find(".tribe-event-date-start").html(info.start_time);
            current.find(".tribe-event-date-end").html(info.end_time);
            current.find(".name > span:last").html(info.hit_song);
        });

        infos.forEach(function(info, index){
        	if(info.day.toLowerCase() !== 'day2') return;
            var current = day2.append('<li><div class="avatar"><a href="info.external_link"><img width="262" height="262" src="images/schedule.jpeg" alt="speaker5" /></a></div><div class="speaker_ds"><h6><a href="info.external_link">info.name</a></h6><div class="meta clearfix"><div class="pull-left"><span class="time"><i class="fa fa-clock-o"></i><span class="tribe-event-date-start">info.start_time</span> - <span class="tribe-event-date-end">info.end_time</span> </span><span class="name"><i class="fa fa-music"></i><span>info.hit_song</span></span></div></div></div></li>').children("li").last();

            current.find("a").attr('href', info.external_link);
            current.find("img").attr("src", info.schedules_image);
            current.find("h6 > a").html(info.name);
            current.find(".tribe-event-date-start").html(info.start_time);
            current.find(".tribe-event-date-end").html(info.end_time);
            current.find(".name > span:last").html(info.hit_song);
        });
    };

    var insertArtistsInfomation = function(infos) {
        var list = $("#artists-information");

        infos.forEach(function(info, index){
            var count = "" + (index + 1);
            if (count.length < 2)
                count = "0" + count;

            var current = list.append('<div class="noo-event-featured-item"><div class="sc-event-item"><div class="event-thumbnail"><a target="_blank" href="/"><img width="1600" height="800" src="images/event/event_1170x350.jpg" alt="" /></a><div class="sc-meta"><span class="sc-date"><i class="fa fa-clock-o"></i><span class="tribe-event-date-start">info.start_time</span> - <span class="tribe-event-date-end">info.end_time</span></span><i class="fa fa-map-marker"></i><span class="sc-address">info.location</span></div></div><div class="sc-event-content"><h3><a target="_blank" ref="/">info.name</a></h3><div class="bottom"><span class="count">00</span><div class="create-date"><span>info.day</span></div></div></div></div> </div>').children(".noo-event-featured-item").last();

            current.find("a").attr('href', info.external_link);
            current.find("img").attr("src", info.artists_image);
            current.find(".tribe-event-date-start").html(info.start_time);
            current.find(".tribe-event-date-end").html(info.end_time);
            current.find(".sc-address").html(info.location);
            current.find("h3 > a").html(info.name);
            current.find(".count").html(count);
            current.find(".create-date > span:last").html(info.day);
        });
    };

    var insertDescription = function(infos) {
        $("#title-description").html(infos.title);
        $("#schedules-description").html(infos.schedules);
        $("#artists-description").html(infos.artists);
        $("#gallery-description").html(infos.gallery);
    };

    var nooGetViewport = function() {
        var e = window, a = "inner";
        if (!("innerWidth" in window)) {
            a = "client";
            e = document.documentElement || document.body;
        }
        return {
            width: e[a + "Width"],
            height: e[a + "Height"]
        };
    };
    $("#noo-nav").onePageNav({
        currentClass: "current-menu-item"
    });
    var nooGetURLParameters = function(url) {
        var result = {};
        var searchIndex = url.indexOf("?");
        if (searchIndex == -1) return result;
        var sPageURL = url.substring(searchIndex + 1);
        var sURLVariables = sPageURL.split("&");
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split("=");
            result[sParameterName[0]] = sParameterName[1];
        }
        return result;
    };
    var nooInit = function() {
		$("#CountDownTimer").attr("data-date", KAMF_D_DAY);
        insertSchedulesInfomation(SCHEDULES_INFORMATION);
        insertArtistsInfomation(SCHEDULES_INFORMATION);
        insertDescription(DESCRIPTIONS);
        
        var isTouch = "ontouchstart" in window;
        if (isTouch) {
            $(".carousel-inner").swipe({
                swipeLeft: function(event, direction, distance, duration, fingerCount) {
                    $(this).parent().carousel("prev");
                },
                swipeRight: function(event, direction, distance, duration, fingerCount) {
                    $(this).parent().carousel("next");
                },
                threshold: 0
            });
        }
        if ($(".navbar").length) {
            var $window = $(window);
            var $body = $("body");
            var navTop = $(".navbar").offset().top;
            var lastScrollTop = 0, navHeight = 0, defaultnavHeight = 70;
            if ($body.hasClass("one-page-layout")) {
                $('.navbar-scrollspy > .nav > li > a[href^="#"]').on( "click", function(e) {
                    e.preventDefault();
                    var target = $(this).attr("href").replace(/.*(?=#[^\s]+$)/, "");
                    if (target && $(target).length) {
                        var position = Math.max(0, $(target).offset().top);
                        position = Math.max(0, position - (adminbarHeight + $(".navbar").outerHeight()) + 5);
                        $("html, body").animate({
                            scrollTop: position
                        }, {
                            duration: 800,
                            easing: "easeInOutCubic",
                            complete: window.reflow
                        });
                    }
                });
                $body.scrollspy({
                    target: ".navbar-scrollspy",
                    offset: adminbarHeight + $(".navbar").outerHeight()
                });
                $(window).resize(function() {
                    $body.scrollspy("refresh");
                });
            }
        }
        $("#noo-search").on( "click", function() {
            $(".search-header5").fadeIn(1).addClass("search-header-eff");
            $(".search-header5").find('input[type="search"]').val("").select();
        });
        $(".remove-form, .close-form").on( "click", function() {
            $(".search-header5").fadeOut(1).removeClass("search-header-eff");
        });
        $(".menu-header3").on( "click", function() {
            $(".header-3 .navbar").toggleClass("eff");
            $(this).toggleClass("eff");
        });
        $(".noo-slider-revolution-container .noo-slider-scroll-bottom").on( "click", function(e) {
            e.preventDefault();
            var sliderHeight = $(".noo-slider-revolution-container").outerHeight();
            $("html, body").animate({
                scrollTop: sliderHeight
            }, 900, "easeInOutExpo");
        });
        $("body").on("mouseleave ", ".masonry-style-elevated .masonry-portfolio.no-gap .masonry-item", function() {
            $(this).closest(".masonry-container").find(".masonry-overlay").hide();
            $(this).removeClass("masonry-item-hover");
        });
        $(".masonry").each(function() {
            var self = $(this);
            var $container = $(this).find(".masonry-container");
            var $filter = $(this).find(".masonry-filters a");
            var masonry_options = {
                gutter: 0
            };
            $container.isotope({
                itemSelector: ".masonry-item",
                transitionDuration: "0.8s",
                masonry: masonry_options
            });
            imagesLoaded(self, function() {
                $container.isotope("layout");
            });
            $(window).resize(function() {
                $container.isotope("layout");
            });
            $filter.on( "click", function(e) {
                e.stopPropagation();
                e.preventDefault();
                var $this = jQuery(this);
                if ($this.hasClass("selected")) {
                    return false;
                }
                self.find(".masonry-result h3").text($this.text());
                var filters = $this.closest("ul");
                filters.find(".selected").removeClass("selected");
                $this.addClass("selected");
                var options = {
                    layoutMode: "masonry",
                    transitionDuration: "0.8s",
                    masonry: {
                        gutter: 0
                    }
                }, key = filters.attr("data-option-key"), value = $this.attr("data-option-value");
                value = value === "false" ? false : value;
                options[key] = value;
                $container.isotope(options);
            });
        });
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) {
                $(".go-to-top").addClass("on");
            } else {
                $(".go-to-top").removeClass("on");
            }
        });
        $("body").on("click", ".go-to-top", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        $("body").on("mousedown", $.proxy(function(e) {
            var element = $(e.target);
            if (!element.is(".searchbar") && element.parents(".searchbar").length === 0) {
                $(".searchbar").removeClass("show").addClass("hide");
            }
        }, this));
		
		//Noo Countdown
		if($('.noo-countdown').length > 0) {
			if ( $(window).height() > 767 ) {
				var $height_w = $(window).height() - $('header').height();
				if ( $('header').hasClass('header-2') || $('header').hasClass('header-3') ) 
					$height_w = $(window).height();
				$('.noo-countdown').css('height',$height_w+'px');
			} else {
				$('.noo-countdown').css('height','700px');
			}
			$(window).resize(function(){
				if ( $(window).height() > 767 ) {
					var $height_w = $(window).height() - $('header').height();
					if ( $('header').hasClass('header-2') || $('header').hasClass('header-3') ) 
						$height_w = $(window).height();
					$('.noo-countdown').css('height',$height_w+'px');
				} else {
					$('.noo-countdown').css('height','700px');
				}
			});
			
			$(function () {
				$('.full-background li:first-child').show();
				var myVar = '';
				clearInterval(myVar);
				myVar = setInterval(function(){
					jQuery('.full-background li:first-child').fadeOut(1200).next('li').fadeIn(1200).end().appendTo('.full-background');
				},3500);
				
				if($('#bgndVideo').length > 0) {
					var onMobile = false;
					if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }
	
					if( ( onMobile === false ) ) {
	
						jQuery(".player").mb_YTPlayer();
	
					} else {
						/* as a fallback we add a special class to the header which displays a poster image */
						jQuery('.noo-countdown').addClass('video-section');
	
					}
				}
				
				$('.scroll-mouse').click(function(){
					var $height_w = $(window).height();
					$("html, body").animate({ scrollTop: $height_w }, 700);
					return false;
				});
				var primary_color = '#f0a441';
	
				$("#CountDownTimer").TimeCircles({
					"count_past_zero": false,
					"animation": "smooth",
					"bg_width": 1,
					"fg_width": 0.01,
					"circle_bg_color": "#fff",
					"time": {
						"Days": {
							"text": "Days",
							"color": "#f91c96",
							"show": true
						},
						"Hours": {
							"text": "Hours",
							"color": "#f91c96",
							"show": true
						},
						"Minutes": {
							"text": "Minutes",
							"color": "#f91c96",
							"show": true
						},
						"Seconds": {
							"text": "Seconds",
							"color": "#f91c96",
							"show": true
						}
					}
				});
			});
		}
		
		//Noo Testimonials
		if($('.testimonial-content').length > 0) {
			var classicOptions = {
				infinite: true,
				circular: true,
				responsive: true,
				debug : false,
				width: '100%',
				height: 'variable',
				scroll: {
				  items: 1,
				  duration: 600,
				  pauseOnHover: "resume",
				  fx: "scroll"
				},
				auto: {
				  timeoutDuration: 100000
				},
				swipe: {
				  onTouch: true,
				  onMouse: true
				},
				items: {
					visible: {
					  min: 1,
					  max: 1,
					},
					height:'variable'
				},
				prev : {button:".testimonial-nav .prev"},
				next : {button:".testimonial-nav .next"},
			};
			$('.testimonial-content .quote-content').carouFredSel(classicOptions);
			imagesLoaded('.testimonial-content .quote-content',function(){
				$('.testimonial-content .quote-content').trigger('updateSizes')
			});
		}
		
		//Noo Clients
		if($('.noo_clients').length > 0) {
			$('.noo_clients').each(function(){
			   $(this).owlCarousel({
				   items : 5,
				   itemsDesktop : [1199,5],
				   itemsDesktopSmall : [979,4],
				   itemsTablet: [768, 3],
				   itemsMobile: [479, 1],
				   slideSpeed:500,
				   paginationSpeed:1000,
				   rewindSpeed:1000,
				   autoHeight: false,
				   addClassActive: true,
				   autoPlay: false,
				   loop:true,
				   pagination: false
			   });
			});
		}
		
		//Swiper Container
		if($('.swiper-container').length > 0) {
			var swiper = new Swiper('.swiper-container', {
				effect: 'coverflow',
				grabCursor: true,
				centeredSlides: true,
				slidesPerView: 'auto',
				paginationClickable: true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				spaceBetween: 30,
				speed: 800,
				coverflow: {
					rotate: 20,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows : false
				}
			});
			swiper.slideTo(1, 800, false);
		}
		
		//Blog Gallery
		if($('.content-featured .sliders').length > 0) {
			$(".content-featured .sliders").each(function() {
				$this = $(this);
				var gallerySliderOptions = {
					infinite: true,
					circular: true,
					auto: false,
					responsive: true,
					items: {
						visible: {
							min: 1,
							max: 1
						}
					},
					prev: {
						button: $this.siblings(".slider-control.prev-btn")
					},
					next: {
						button: $this.siblings(".slider-control.next-btn")
					},
					pagination: {
						container: $this.siblings(".slider-indicators")
					}
				};
				$this.carouFredSel(gallerySliderOptions);
			});
		}
		
		//Google Maps
		if($('#googleMap').length > 0) {
			var myCenter = new google.maps.LatLng(38.581572,-121.494400);
			var myMaker = new google.maps.LatLng(38.581572,-121.494400);
			function initialize() {
				var styles = [
					{
						stylers: [ { "saturation":-100 }, { "lightness": -10 }]
					}
				];
				var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
				var mapProp = {
					center: myCenter,
					zoom: 16,
					scrollwheel: false,
					mapTypeControlOptions: {
						mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
					}
				};
				var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
				map.mapTypes.set('map_style', styledMap);
				map.setMapTypeId('map_style');
				var marker = new google.maps.Marker({
					position: myMaker,
					icon: "http://wp.nootheme.com/ivent/wp-content/uploads/2015/06/ICON.png"
				});
				marker.setMap(map);
			}
			google.maps.event.addDomListener(window, 'load', initialize);
		}
		
		//Revolution Slider
		if($('#rev_slider').length > 0) {
			revSliderInit();
		}
    };
    $(document).ready(function() {
        nooInit();
    });
    $(document).bind("noo-layout-changed", function() {
        nooInit();
    });
    $(".shedule_date li:first-child").addClass("active");
    $(".speaker_item:first-child").addClass("eff");
    $(".schedule-tab:first-child").addClass("active");
    $(".schedule-header li:first-child").find("a").addClass("active");
    $(".shedule_date li").on( "click", function() {
        $(this).parent().find("li").removeClass("active");
        $(this).addClass("active");
        var $class = $(this).data("date");
        $(".speaker_item").slideUp();
        $($class).slideDown();
    });
    $(".schedule-header li a").on( "click", function(event) {
        event.preventDefault();
        $(".schedule-header li a").removeClass("active");
        $(this).addClass("active");
        var $class = $(this).data("name");
        $(".schedule-tab").slideUp();
        $($class).slideDown();
    });
    nooscrollTop();
})(jQuery);

jQuery(window).scroll(function() {
    nooscrollTop();
});

//Preloader
$(window).load(function() {
	$('#loading').fadeOut(300);
});

function nooscrollTop() {
    if (jQuery("body").hasClass("fixed_top") && jQuery(window).width() > 991 && jQuery("header").hasClass("header-1")) {
        var $_height_1 = jQuery(".header-1").innerHeight();
        jQuery("body").css("padding-top", "100px");
    } else {
        jQuery("body").css("padding-top", 0);
    }
    var $top = jQuery(window).scrollTop();
    var $topbar_height = 0;
    if (jQuery(".noo-topbar").length > 0) {
        var $topbar = jQuery(".noo-topbar");
        var $topbar_height = $topbar.innerHeight();
    }
    if (jQuery("body").hasClass("fixed_top") && jQuery(window).width() > 991) {
        if ($top > 0) {
            jQuery(".header-3").addClass("eff");
        } else {
            jQuery(".header-3").removeClass("eff");
        }
        if ($top > 0) {
            jQuery(".header-2").addClass("eff");
        } else {
            jQuery(".header-2").removeClass("eff");
        }
        if (jQuery("header").hasClass("header-4")) {
            if ($top >= $topbar_height) {
                jQuery(".header-4 .navbar-wrapper").addClass("fixed_top_eff");
                jQuery("body").css("padding-top", "100px");
            } else {
                jQuery(".header-4 .navbar-wrapper").removeClass("fixed_top_eff");
                jQuery("body").css("padding-top", "0");
            }
        }
    }
}

function revSliderInit(){
	$("#rev_slider").show().revolution({
	  sliderType:"standard",
	  sliderLayout:"fullscreen",
	  dottedOverlay:"none",
	  delay:9000,
	  navigation: {
		  keyboardNavigation:"off",
		  keyboard_direction: "horizontal",
		  mouseScrollNavigation:"off",
		  onHoverStop:"off",
		  touch:{
			  touchenabled:"on",
			  swipe_threshold: 75,
			  swipe_min_touches: 50,
			  swipe_direction: "horizontal",
			  drag_block_vertical: false
		  }
		  ,
		  arrows: {
			  style:"hades",
			  enable:true,
			  hide_onmobile:false,
			  hide_onleave:false,
			  tmp:'<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
			  left: {
				  h_align:"left",
				  v_align:"center",
				  h_offset:0,
				  v_offset:0
			  },
			  right: {
				  h_align:"right",
				  v_align:"center",
				  h_offset:40,
				  v_offset:0
			  }
		  }
	  },
	  responsiveLevels:[1240,1024,778,480],
	  visibilityLevels:[1240,1024,778,480],
	  gridwidth:[1240,1024,778,480],
	  gridheight:[868,768,960,720],
	  lazyType:"none",
	  parallax: {
		  type:"mouse",
		  origo:"slidercenter",
		  speed:2000,
		  levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
		  type:"mouse",
	  },
	  shadow:0,
	  spinner:"off",
	  stopLoop:"on",
	  stopAfterLoops:0,
	  stopAtSlide:1,
	  shuffle:"off",
	  autoHeight:"off",
	  fullScreenAutoWidth:"off",
	  fullScreenAlignForce:"off",
	  fullScreenOffsetContainer: "",
	  fullScreenOffset: "",
	  disableProgressBar:"on",
	  hideThumbsOnMobile:"on",
	  hideSliderAtLimit:0,
	  hideCaptionAtLimit:0,
	  hideAllCaptionAtLilmit:0,
	  debugMode:false,
	  fallbacks: {
		  simplifyAll:"off",
		  nextSlideOnWindowFocus:"off",
		  disableFocusListener:false,
	  }
  });
}