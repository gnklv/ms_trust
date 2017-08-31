"use strict";function getScrollBarWidth(){var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var n=e.offsetWidth;t.style.overflow="scroll";var o=e.offsetWidth;return n==o&&(o=t.clientWidth),document.body.removeChild(t),n-o}$(document).ready(function(){function e(e,t,n){bodymovin.loadAnimation({container:document.querySelector("#"+e+" .c-themes__icon"),renderer:"svg",loop:!1,autoplay:!0,animationData:t,name:n})}function t(t,n,o){e(t,n,o)}function n(){if($(".c-themes__item").length>0)var e=setInterval(function(){$("#"+o.id[0]+" .c-themes__icon").hasClass("aos-animate")&&(setTimeout(function(){t(o.id[0],o.data[0],o.name[0])},200),clearInterval(e))},100),n=setInterval(function(){$("#"+o.id[1]+" .c-themes__icon").hasClass("aos-animate")&&(setTimeout(function(){t(o.id[1],o.data[1],o.name[1])},200),clearInterval(n))},100),i=setInterval(function(){$("#"+o.id[2]+" .c-themes__icon").hasClass("aos-animate")&&(setTimeout(function(){t(o.id[2],o.data[2],o.name[2])},200),clearInterval(i))},100)}var o,i,a,c,r,s,l,d,m,h,u,f,p;if(AOS.init(),o={id:["anim-svg-1","anim-svg-2","anim-svg-3"],data:[animationDataOne,animationDataTwo,animationDataThree],name:["1","2","3"],dataHover:[animationDataHoverOne,animationDataHoverTwo,animationDataHoverThree]},n(),$(".c-themes__item").length>0){var v=function(e,t,n){bodymovin.loadAnimation({container:document.querySelector("#"+e+" .c-themes__icon"),renderer:"svg",loop:!1,autoplay:!1,animationData:t,name:n})},_=function(e){var t=$(e.target).closest(".c-themes__item"),n=t.attr("id"),i=t.attr("data-name"),a=o.dataHover[parseInt(i)-1];bodymovin.destroy(i),v(n,a,i),bodymovin.play(i)};$(".c-themes__item").on("mouseenter",_)}r=$(".c-hero__anchors-burger"),r.on("click",function(){$(".c-hero__desc-inner").toggleClass("open")}),s=$(".c-partners__slider"),l=$(".c-speakers__slider"),d={dots:!0,infinite:!0,slidesToShow:3,slidesToScroll:3,swipe:!1,responsive:[{breakpoint:992,settings:{dots:!0,infinite:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{dots:!0,infinite:!0,swipe:!0,slidesToShow:1,slidesToScroll:1}}]},s.length>0&&s.slick(d),l.length>0&&l.on("init",function(e,t){$(".c-speakers__item.slick-active").addClass("fade")}).slick(d).on("afterChange",function(e,t,n,o){$(".c-speakers__item").removeClass("fade active"),$(".c-speakers__item.slick-active").addClass("fade")}),i=$(".c-speakers__item"),a=$(".c-modal"),c=$(".c-modal__close"),i.on("click",function(){var e=$(this).find(".c-speakers__photo")[0].style.backgroundImage,t=$(this).find(".c-speakers__name").html(),n=$(this).find(".c-speakers__post").html(),o=$(this).find(".c-speakers__desc").html();a.find(".c-modal__photo").css("background-image",e),a.find(".c-modal__name").html(t),a.find(".c-modal__post").html(n),a.find(".c-modal__desc").html(o),a.arcticmodal()}),m=$(".c-hero__desc"),h=$(".c-hero__desc-wrapper"),u=15,f=50,h.length>0&&h.waypoint({handler:function(e){"down"==e?m.addClass("sticky").css("top",-m.outerHeight()).animate({top:0}):m.removeClass("sticky").css("top","auto").animate({top:"auto"})},offset:function(){return-(m.outerHeight()+f)}}),p=$(".c-hero__anchors-link"),p.on("click",function(e){var t=$(this).attr("href");e.preventDefault(),$(".c-hero__desc-inner.open")?($(".c-hero__desc-inner").removeClass("open"),setTimeout(function(){$("html, body").animate({scrollTop:$(t).offset().top-m.outerHeight()})},200)):$("html, body").animate({scrollTop:$(t).offset().top-m.outerHeight()})}),$(".c-programm__item-title").on("click",function(e){e.preventDefault(),$(".c-popup__content").html(""),$(".c-popup__content").html($(this).next().html()),$(".c-popup__overlay").fadeIn(),$(".c-popup").css({top:$(this).offset().top+$(this).outerHeight(),left:$(this).offset().left})}),$(document).on("click",function(e){switch(e.target){case $(".c-popup__overlay")[0]:case $(".c-popup__close")[0]:case $(".c-popup__close-icon")[0]:$(".c-popup__overlay").fadeOut()}})}),function(){function e(){t.removeEventListener("loadedmetadata",e),t.play(),t.addEventListener("timeupdate",function(){t.currentTime>=t.duration&&(t.currentTime=3.55,t.play())},!1)}var t=document.getElementById("video-bg");t&&t.addEventListener("loadedmetadata",e)}(),function(){var e=function(){function e(){d=$("html, body").outerWidth(),m=window.innerHeight,p={x:d/2,y:m/2},h=document.getElementById("canvas-connections"),h.width=d,h.height=m,u=h.getContext("2d"),f=[];for(var e=0;e<d;e+=d/10)for(var t=0;t<m;t+=m/10){var n=e+Math.random()*d/10,o=t+Math.random()*m/10,i={x:n,originX:n,y:o,originY:o};f.push(i)}for(var a=0;a<f.length;a++){for(var c=[],r=f[a],v=0;v<f.length;v++){var _=f[v];if(r!=_){for(var g=!1,y=0;y<5;y++)g||void 0==c[y]&&(c[y]=_,g=!0);for(var y=0;y<5;y++)g||l(r,_)<l(r,c[y])&&(c[y]=_,g=!0)}}r.closest=c}for(var a in f){var w=new s(f[a],2+2*Math.random(),"rgba(0,0,0,0.15)");f[a].circle=w}}function t(){"ontouchstart"in window||window.addEventListener("mousemove",n),window.addEventListener("resize",o)}function n(e){var t,n;t=n=0,e.pageX||e.pageY?(t=e.pageX-(document.body.scrollLeft+document.documentElement.scrollLeft),n=e.pageY-(document.body.scrollTop+document.documentElement.scrollTop)):(e.clientX||e.clientY)&&(t=e.clientX,n=e.clientY),p.x=t,p.y=n}function o(){d=$(".c-programm").outerWidth(),m=window.innerHeight,h.width=d,h.height=m}function i(){a();for(var e in f)c(f[e])}function a(){u.clearRect(0,0,d,m);for(var e in f)Math.abs(l(p,f[e]))<4e3?(f[e].active=.3,f[e].circle.active=.6):Math.abs(l(p,f[e]))<2e4?(f[e].active=.1,f[e].circle.active=.3):Math.abs(l(p,f[e]))<4e4?(f[e].active=.02,f[e].circle.active=.1):(f[e].active=0,f[e].circle.active=0),r(f[e]),f[e].circle.draw();requestAnimationFrame(a)}function c(e){TweenLite.to(e,1+1*Math.random(),{x:e.originX-50+100*Math.random(),y:e.originY-50+100*Math.random(),ease:Circ.easeInOut,onComplete:function(){c(e)}})}function r(e){if(e.active)for(var t in e.closest)u.beginPath(),u.moveTo(e.x,e.y),u.lineTo(e.closest[t].x,e.closest[t].y),u.strokeStyle="rgba(190,190,190,"+e.active+")",u.stroke()}function s(e,t,n){var o=this;!function(){o.pos=e||null,o.radius=t||null,o.color=n||null}(),this.draw=function(){o.active&&(u.beginPath(),u.arc(o.pos.x,o.pos.y,o.radius,0,2*Math.PI,!1),u.fillStyle="rgba(190,190,190,"+o.active+")",u.fill())}}function l(e,t){return Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)}var d,m,h,u,f,p;e(),i(),t()};$(document).ready(function(){$(window).width()>1024&&$("#canvas-connections").length&&e()})}();
//# sourceMappingURL=../javascripts/common.js.map
