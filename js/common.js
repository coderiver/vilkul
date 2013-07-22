$(document).ready(function() {
$('.header__menu').click(function (e) {
  $('body').toggleClass('has-sidebar');
   e.stopPropagation();
});
$('.wrap').click(function (e) {
  $('body').removeClass('has-sidebar');
});
$('.ss .is-parent').click(function (e) {
  $(this).toggleClass('is-expanded');
});
//colorbox
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

//calendar select
$('.js-datepicker').datepicker({
  inline: true,
  monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
  'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
  monthNamesShort: ['Январь','Февраль','Март','Апрель','Май','Июнь',
  'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
  dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
  dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
  dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
  changeYear: true,
  minDate: "-3Y", 
  maxDate: "0"
});

//scroll
$(window).scroll(function() {
  if ($('body').scrollTop() > 180) {
  	$('.wrap').addClass('wrap_scroll');
  }
  else {
  	$('.wrap').removeClass('wrap_scroll');
  }
});

});