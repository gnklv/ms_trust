$(document).ready(function() {
	var speaker, 
			partnersSlider, speakersSlider, slickOpts,
			sticky, stickyWrapper, top_spacing, waypoint_offset, 
			anchorLink, subnavList, subnavTitle, subnavClass;

	AOS.init();

	partnersSlider = $('.c-partners__slider');
	speakersSlider = $('.c-speakers__slider');

	slickOpts = {
		dots: true,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        dots: true,
	        infinite: false,
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        dots: true,
	        infinite: false,
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	};

	partnersSlider.slick(slickOpts);
	speakersSlider.slick(slickOpts);

	speaker = $('.c-speakers__item');

	speaker.on('click', function() {
		$(this).toggleClass('active');
	});

	sticky = $('.c-hero__desc');
	stickyWrapper = $('.c-hero__desc-wrapper');
	top_spacing = 15;
	waypoint_offset = 50;

	stickyWrapper.waypoint({
		handler: function(direction) {
			if(direction == 'down') {
				sticky.addClass('sticky')
							.css('top', -sticky.outerHeight())
							.animate({'top': 0});
			} else {
				sticky.removeClass('sticky')
							.css('top', 'auto' )
							.animate({'top': 'auto'});
			}
		},
		offset: function() {
			return -(sticky.outerHeight() + waypoint_offset);
		}
	});


	anchorLink = $('.c-hero__anchors-link');

	anchorLink.on('click', function(event) {
		var currentHref = $(this).attr('href');
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $(currentHref).offset().top - sticky.outerHeight()
		});
  });


	subnavList = $('.c-subnav__list');
	subnavTitle = $('.c-subnav__title');
	subnavClass = 'c-subnav__list--show';

  if (subnavList.hasClass(subnavClass)) {
		subnavList.removeClass(subnavClass);
	}

  subnavTitle.on('click', function() {
  	subnavList.toggleClass(subnavClass);
  });
	
});
(function() {
	var video = document.getElementById('video-bg');

	video.onloadeddata = function() {
		video.play();
		setInterval(function() {
			if (video.currentTime >= 9) {
				video.currentTime = 1.7 
			}
		}, 500);
	};
})();