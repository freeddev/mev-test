$(function() {

	$('.close').click(function () {
		$('.wrp-toggle-mnu').addClass('close');
		$('.wrp-toggle-mnu').removeClass('open')
	})
	$('.mob-menu').click(function () {
		$('.wrp-toggle-mnu').addClass('open');
		$('.wrp-toggle-mnu').removeClass('close')
	})

	$('.header-slider').slick({
		dots: true,
		slidesToShow: 1,
		infinite: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false
				} 
				
			}
			
		]
	});
	var windowHeight = $(window).height();

	heightHeader(windowHeight)
	$(window).resize(function () {
		windowHeight = $(window).height();

		heightHeader(windowHeight);
	});
});
/*var imgHead = [
	'img/top-slider/s1.jpg',
	'img/top-slider/s2.jpg',
	'img/top-slider/s3.jpg',
	'img/top-slider/s4.jpg',
	'img/top-slider/s5.jpg',
	'img/top-slider/s6.jpg',
], i=1;
function csaHead(position){
	console.log(position);

	$('.csa-head').animate({'opacity':'0'},850,function(){
		i=1;
		$('.csa-head').css({'background-image':'url('+imgHead[position]+')'});
	});
	$('.csa-head').animate({'opacity':'1'},850);

	
}*/

function heightHeader(height) {
	console.log(height)
	if (height <= 460) {
		$('.item-slide').css('height', '460px');
	}else{
		$('.item-slide').css('height', '100vh');
	}
}