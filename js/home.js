function autoplay() {
	$('.carousel').carousel('next');
	setTimeout(autoplay, 3500);
};
$(document).ready(function() {
	$('#header').load('header.html');
	$('#footer').load('footer.html');
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	setTimeout(autoplay, 2000);
});