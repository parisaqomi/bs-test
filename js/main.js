(function ($) {
	"use strict"

	///////////////////////////
	// Preloader
	$(window).on('load', function () {
		$("#preloader").delay(600).fadeOut();
	});

	///////////////////////////
	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	///////////////////////////
	// Smooth scroll
	$("#nav .main-nav a[href^='#']").on('click', function (e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	///////////////////////////
	// On Scroll
	$(window).on('scroll', function () {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});

})(jQuery);




let ss_loveBox = document.getElementById('ss_loveBox');
let hr_loveBox = document.getElementById('hr_loveBox');
let dd_loveBox = document.getElementById('dd_loveBox');


function computeAndUpdate() {
	let whenItAllBegan = new Date(2016, 11, 8, 21, 30);
	let millisecondsPassedWithLove = Date.now() - whenItAllBegan;
	let secondsPassedWithLove = Math.ceil(millisecondsPassedWithLove / 1000);
	let hoursPassedWithLove = Math.ceil(secondsPassedWithLove / 3600);
	let daysPassedWithLove = Math.ceil(hoursPassedWithLove / 24);
	dd_loveBox.innerHTML = daysPassedWithLove.toString() + (" " +" days which is");
	hr_loveBox.innerHTML = hoursPassedWithLove + (" " +" hours which is");
	ss_loveBox.innerHTML = secondsPassedWithLove.toString() + (" " +" seconds");

	setInterval(computeAndUpdate, 1000);




	let born = new Date(1995, 10, 22, 21, 30);
	let millisecondsPassed = Date.now() - born;
	let secondsPassed = Math.ceil(millisecondsPassed / 1000);
	let hoursPassed = Math.ceil(secondsPassed / 3600);
	let daysPassed = Math.ceil(hoursPassed / 24);
	dd_born.innerHTML = daysPassed.toString() + (" " +" days which is");
	hr_born.innerHTML = hoursPassed + (" " +" hours which is");
	ss_born.innerHTML = secondsPassed.toString() + (" " +" seconds");

	setInterval(computeAndUpdate, 1000);


}