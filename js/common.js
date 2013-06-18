$(document).ready(function() {

jQuery.extend(jQuery.colorbox.settings, {
	current: "{current}/{total}"
});

$('.js-cb').colorbox({
	rel:'gallery', 
	slideshow:true, 
	slideshowAuto: false, 
	opacity: 0.8
});

$(document).bind('cbox_complete', function(){
    var head = $.colorbox.element().attr('data-head');
    var link = $.colorbox.element().attr('data-link');
    $('#cboxLoadedContent').append('<div id="cboxHead">' + head + '</div>');
    $('#cboxLoadedContent').append('<div id="cboxLoad"><a href=' + link + '>Скачать в HQ</a></div>');
});

$(window).scroll(function() {
  if ($('body').scrollTop() > 180) {
  	$('.wrap').addClass('wrap_scroll');
  }
  else {
  	$('.wrap').removeClass('wrap_scroll');
  }
});

});