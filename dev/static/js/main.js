//$(document).ready(function () {
  //  svg4everybody({});
//});

var progressDesign = document.querySelector('.progress-bar--design');
var progressDevelop = document.querySelector('.progress-bar--development');
var progressWp = document.querySelector('.progress-bar--wp');
var progressDrp = document.querySelector('.progress-bar--drp');

var barDes = new ProgressBar.Line(progressDesign ,{
    easing: 'easeInOut',
    color: '#f39c12',
    trailColor: '#e6e6e6',
    duration: 2000,
    svgStyle: {
        display: 'block',
        width: '100%',
        height: '10px'
    },
    text: {
    style: {
      color: '#000000',
      position: 'absolute',
      left: '75px',
      top: '0px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
    step: (state, barDes) => {
      barDes.setText(Math.round(barDes.value() * 100) + ' %');
    }
});
var barDev = new ProgressBar.Line(progressDevelop ,{
    easing: 'easeInOut',
    color: '#f39c12',
    trailColor: '#e6e6e6',
    duration: 2000,
    svgStyle: {
        display: 'block',
        width: '100%',
        height: '10px'
    },
    text: {
    style: {
      position: 'absolute',
      color: '#000000',
      left: '125px',
      top: '0px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
    step: (state, barDev) => {
      barDev.setText(Math.round(barDev.value() * 100) + ' %');
    }
});
var barWp = new ProgressBar.Line(progressWp ,{
    easing: 'easeInOut',
    color: '#f39c12',
    trailColor: '#e6e6e6',
    duration: 2000,
    svgStyle: {
        display: 'block',
        width: '100%',
        height: '10px'
    },
    text: {
    style: {
      position: 'absolute',
      color: '#000000',
      left: '105px',
      top: '0px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
    step: (state, barWp) => {
      barWp.setText(Math.round(barWp.value() * 100) + ' %');
    }
});
var barDrp = new ProgressBar.Line(progressDrp ,{
    easing: 'easeInOut',
    color: '#f39c12',
    trailColor: '#e6e6e6',
    duration: 2000,
    svgStyle: {
        display: 'block',
        width: '100%',
        height: '10px'
    },
    text: {
    style: {
      position: 'absolute',
      color: '#000000',
      left: '75px',
      top: '0px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
    step: (state, barDrp) => {
      barDrp.setText(Math.round(barDrp.value() * 100) + ' %');
    }
});


$(document).ready(function() { // Ждём загрузки страницы
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1000) {
      barDes.animate(0.88);
      barDev.animate(0.67);
      barWp.animate(0.96);
      barDrp.animate(0.77);
		}
	});
});

$('.portfolio-gallery').slick({
  prevArrow: $('.portfolio-gallery-arrow--left'),
  nextArrow: $('.portfolio-gallery-arrow--right'),
  dots:true,
  dotsClass: 'portfolio-gallery-dots',
  customPaging: function(slider, i) {
      return $('<button class="portfolio-gallery-dot" <button/>');
  },
});

$('.testimonials-block').slick({
  arrows: false,
  dots: true,
  dotsClass: 'testimonial-dots',
  customPaging: function(slider, i) {
      return $('<button class="testimonial-gallery-dot" <button/>');
  },
});
