$(document).ready(function() {
	var animApp, 
			speaker, modal, btnCloseModal,
			burgerBtn,
			partnersSlider, speakersSlider, slickOpts,
			sticky, stickyWrapper, top_spacing, waypoint_offset, 
			anchorLink, subnavList, subnavTitle, subnavClass;

	AOS.init();

	animApp = {
  	id: ['anim-svg-1', 'anim-svg-2', 'anim-svg-3'],
  	data: [animationDataOne, animationDataTwo, animationDataThree], 
  	name: ['1', '2', '3'],
  	dataHover: [animationDataHoverOne, animationDataHoverTwo, animationDataHoverThree]
  };

  function createAnim (id, data, name) {
		return bodymovin.loadAnimation({
			container: document.querySelector('#'+ id + ' .c-themes__icon'),
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData: data,
			name: name
		});
	};

	const anim1 = createAnim(animApp.id[0], animApp.data[0], animApp.name[0]);
	const anim2 = createAnim(animApp.id[1], animApp.data[1], animApp.name[1]);
	const anim3 = createAnim(animApp.id[2], animApp.data[2], animApp.name[2]);

	let circleAnimations = [anim1, anim2 ,anim3]

	function initAnim (id, data, name) {
		createAnim(id, data, name);
	};

	watchAnimClass();

	function watchAnimClass() {
		if ($('.c-themes__item').length > 0) {
			var animClass = [];
			let items = $('.c-themes__icon');

			items.each(function(i, el) {
					el.addEventListener('transitionend', function(e) {
						if(e.propertyName === 'opacity') {
							circleAnimations[i].goToAndPlay(0)
						}
					})
			})
		}
	};

	if ($('.c-themes__item').length > 0) {
		function createAnimHover (id, data, name) {
			bodymovin.loadAnimation({
				container: document.querySelector('#'+ id + ' .c-themes__icon'),
				renderer: 'svg',
				loop: false,
				autoplay: false,
				animationData: data,
				name: name
			})
		}

		function animHandler (e) {
			var item = $(e.target).closest('.c-themes__item'),
				id = item.attr('id'),
				name = item.attr('data-name'),
				data = animApp.dataHover[parseInt(name) - 1];

			bodymovin.destroy(name);
			createAnimHover(id, data, name);
			bodymovin.play(name);
		}

		$('.c-themes__item').on('mouseenter', animHandler);
	};

	burgerBtn = $('.c-hero__anchors-burger');

	burgerBtn.on('click', function() {
		$('.c-hero__desc-inner').toggleClass('open');
	});

	partnersSlider = $('.c-partners__slider');
	speakersSlider = $('.c-speakers__slider');

	slickOpts = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		swipe: false,
		responsive: [
	    {
	      breakpoint: 993,
	      settings: {
	        dots: true,
	        infinite: true,
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 769,
	      settings: {
	        dots: false,
	        infinite: true,
	        swipe: true,
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	};

	if (partnersSlider.length > 0) partnersSlider.slick(slickOpts);

	if (speakersSlider.length > 0) {
		speakersSlider
			.on('init', function(event, slick) {
				$('.c-speakers__item.slick-active').addClass('fade');
				$('.c-speakers__count-all').text(slick.$slides.length);
			})	
			.slick(slickOpts)
			.on('afterChange', function(event, slick, currentSlide, nextSlide) {
				$('.c-speakers__item').removeClass('fade active');
				$('.c-speakers__item.slick-active').addClass('fade');
				$('.c-speakers__count-cur').text(currentSlide + 1);
			});
	}

	speaker = $('.c-speakers__item');
	modal = $('.c-modal__overlay');
	btnCloseModal = $('.c-modal__close');

	speaker.on('click', function() {
		var urlImg = $(this).find('.c-speakers__photo')[0].style.backgroundImage,
				nameSpeaker = $(this).find('.c-speakers__name').html(),
				postSpeaker = $(this).find('.c-speakers__post').html(),
				descSpeaker = $(this).find('.c-speakers__desc').html();

		
		$('.c-modal__photo').css('background-image', urlImg);
		
		$('.c-modal__name').html(nameSpeaker);
		$('.c-modal__name').data('text', nameSpeaker);

		$('.c-modal__post').html(postSpeaker);
		$('.c-modal__post').data('text', postSpeaker);

		$('.c-modal__desc').html(descSpeaker);
		$('.c-modal__desc').data('text', descSpeaker);

		openModal(modal);
	});

	btnCloseModal.on('click', function() {
		closeModal(modal);
	});

	function openModal(el) {
		el.addClass('open');

		$('body').css({ 'overflow': 'hidden', 'margin-right': `${getScrollBarWidth()}px` });
		$('.c-hero__desc').css('right', `${getScrollBarWidth()}px`);
	}

	function closeModal(el) {
		el.removeClass('open');

		$('body').css({'overflow': '', 'margin-right': ''});
		$('.c-hero__desc').css('right', '');
	}

	sticky = $('.c-hero__desc');
	stickyWrapper = $('.c-hero__desc-wrapper');
	top_spacing = 15;
	waypoint_offset = 50;

	if (stickyWrapper.length > 0) {
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
	}


	anchorLink = $('.c-hero__anchors-link.anchor');

	anchorLink.on('click', function(event) {
		var currentHref = $(this).attr('href');
		event.preventDefault();

		if ($('.c-hero__desc-inner.open')) {
			$('.c-hero__desc-inner').removeClass('open');
			setTimeout(function() {
				$('html, body').animate({
					scrollTop: $(currentHref).offset().top - sticky.outerHeight()
				});
			}, 200);
			
		} else {
			$('html, body').animate({
				scrollTop: $(currentHref).offset().top - sticky.outerHeight()
			});
		}

  });
	
	$('.c-programm__item-title').on('click', function(event) {
		event.preventDefault();

		$('.c-popup__content').html('');
		$('.c-popup__content').html($(this).next().html());

		$('.c-popup__overlay').fadeIn();
		$('.c-popup').css({ 'top': $(this).offset().top + $(this).outerHeight(), 'left': $(this).offset().left });
	});

	$(document).on('click', function(event) {

		switch(event.target) {
			case $('.c-popup__overlay')[0]:
			case $('.c-popup__close')[0]:
			case $('.c-popup__close-icon')[0]:
				$('.c-popup__overlay').fadeOut();
		}

		switch(event.target) {
			case $('.c-modal__overlay')[0]:
			case $('.c-modal__wrapper')[0]:
			case $('.c-modal__close')[0]:
			case $('.c-modal__close-icon')[0]:
				closeModal($('.c-modal__overlay'));
		}
	});

});
(function() {
	var video = document.getElementById('video-bg');

	if (video) video.addEventListener('loadedmetadata', init);

	function init() {
		video.removeEventListener('loadedmetadata', init);
		video.play();
		video.addEventListener('timeupdate', 
			function() {
				if (video.currentTime >= video.duration) {
					video.currentTime = 3.55;
					video.play();
				}
			}, false)
	}
})();


(function() {
	var backgroundAnimation = function() {
	    var width, height, largeHeader, canvas, ctx, points, target;
	    initHeader();
	    initAnimation();
	    addListeners();

	    function initHeader() {
	        width = $('html, body').outerWidth();
	        height = window.innerHeight;
	        target = { x: width / 2, y: height / 2 };
	        canvas = document.getElementById('canvas-connections');
	        canvas.width = width;
	        canvas.height = height;
	        ctx = canvas.getContext('2d');
	        points = [];
	        for (var x = 0; x < width; x = x + width / 10) {
	            for (var y = 0; y < height; y = y + height / 10) {
	                var px = x + Math.random() * width / 10;
	                var py = y + Math.random() * height / 10;
	                var p = { x: px, originX: px, y: py, originY: py };
	                points.push(p);
	            }
	        }
	        for (var i = 0; i < points.length; i++) {
	            var closest = [];
	            var p1 = points[i];
	            for (var j = 0; j < points.length; j++) {
	                var p2 = points[j]
	                if (!(p1 == p2)) {
	                    var placed = false;
	                    for (var k = 0; k < 5; k++) {
	                        if (!placed) {
	                            if (closest[k] == undefined) {
	                                closest[k] = p2;
	                                placed = true;
	                            }
	                        }
	                    }
	                    for (var k = 0; k < 5; k++) {
	                        if (!placed) {
	                            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
	                                closest[k] = p2;
	                                placed = true;
	                            }
	                        }
	                    }
	                }
	            }
	            p1.closest = closest;
	        }
	        for (var i in points) {
	            var c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(0,0,0,0.15)');
	            points[i].circle = c;
	        }
	    }

	    function addListeners() {
	        if (!('ontouchstart' in window)) { 
	        	window.addEventListener('mousemove', mouseMove); 
	      	} 
	        window.addEventListener('resize', resize);
	    }

	    function mouseMove(e) {
	        var posx, posy;
	        posx = posy = 0;
	        if (e.pageX || e.pageY) {
	            posx = e.pageX - (document.body.scrollLeft + document.documentElement.scrollLeft);
	            posy = e.pageY - (document.body.scrollTop + document.documentElement.scrollTop);
	        } else if (e.clientX || e.clientY) {
	            posx = e.clientX;
	            posy = e.clientY;
	        }
	        target.x = posx;
	        target.y = posy;
	    }

	    function resize() {
	        width = $('.c-programm').outerWidth();
	        height = window.innerHeight;
	        canvas.width = width;
	        canvas.height = height;
	    }

	    function initAnimation() { animate(); for (var i in points) { shiftPoint(points[i]); } }

	    function animate() {
	          ctx.clearRect(0, 0, width, height);
	          for (var i in points) {
	              if (Math.abs(getDistance(target, points[i])) < 4000) {
	                  points[i].active = 0.3;
	                  points[i].circle.active = 0.6;
	              } else if (Math.abs(getDistance(target, points[i])) < 20000) {
	                  points[i].active = 0.1;
	                  points[i].circle.active = 0.3;
	              } else if (Math.abs(getDistance(target, points[i])) < 40000) {
	                  points[i].active = 0.02;
	                  points[i].circle.active = 0.1;
	              } else {
	                  points[i].active = 0;
	                  points[i].circle.active = 0;
	              }
	              drawLines(points[i]);
	              points[i].circle.draw();
	          }
	        requestAnimationFrame(animate);
	    }

	    function shiftPoint(p) { TweenLite.to(p, 1 + 1 * Math.random(), { x: p.originX - 50 + Math.random() * 100, y: p.originY - 50 + Math.random() * 100, ease: Circ.easeInOut, onComplete: function() { shiftPoint(p); } }); }

	    function drawLines(p) {
	        if (!p.active) return;
	        for (var i in p.closest) {
	            ctx.beginPath();
	            ctx.moveTo(p.x, p.y);
	            ctx.lineTo(p.closest[i].x, p.closest[i].y);
	            ctx.strokeStyle = 'rgba(190,190,190,' + p.active + ')';
	            ctx.stroke();
	        }
	    }

	    function Circle(pos, rad, color) {
	        var _this = this;
	        (function() {
	            _this.pos = pos || null;
	            _this.radius = rad || null;
	            _this.color = color || null;
	        })();
	        this.draw = function() {
	            if (!_this.active) return;
	            ctx.beginPath();
	            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
	            ctx.fillStyle = 'rgba(190,190,190,' + _this.active + ')';
	            ctx.fill();
	        };
	    }

	    function getDistance(p1, p2) { return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2); }
	}

	$(document).ready(function() {
		if ($(window).width() > 1024) {
			if ($('#canvas-connections').length) { backgroundAnimation(); }
		}
	});
})();

function getScrollBarWidth () {
  let inner = document.createElement('p');
  inner.style.width = "100%";
  inner.style.height = "200px";

  let outer = document.createElement('div');
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild (inner);

  document.body.appendChild (outer);
  let w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  let w2 = inner.offsetWidth;
  if (w1 == w2) w2 = outer.clientWidth;

  document.body.removeChild (outer);

  return w1 - w2;
}