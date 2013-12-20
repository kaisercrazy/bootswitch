/*!
 * bootswitch.js
 * https://github.com/kaisercrazy/bootswitch
 * Copyright 2013 Serkan Algur; @license GPL
 */
(function($) {

	$.fn.bootswitch = function(options) {
		//Default Options
		var opt = $.extend({
		    object: this, //the value 'class' of button group. generally '.btn-group'
		    positive: '.yes', //positive div (button) (should be class or id)
		    negative: '.no', //negative div (button) (should be class or id)
		    posval: 'yes', //positive button value (should be string or integer)
		    negval: 'no', //negative button value (should be string or integer)
		    input: '#showm' //target input id
		}, options);

		return $(opt.object).each(function() {
			//Check For Default value of hidden input
			if (opt.negval == $(opt.input).val()) {
				$(opt.object).children(opt.negative).addClass('active');
			} else if (opt.posval == $(opt.input).val()) {
				$(opt.object).children(opt.positive).addClass('active');
			}

			//Positive Click
			$(opt.object).children(opt.positive).on('click', function() {
				$(opt.object).children(opt.negative).removeClass('active');
				$(this).addClass('active');
				$(opt.input).val(opt.posval).change();
			});
			//Negative Click
			$(opt.object).children(opt.negative).on('click', function() {
				$(opt.object).children(opt.positive).removeClass('active');
				$(this).addClass('active');
				$(opt.input).val(opt.negval).change();
			});
		});
	}
}(jQuery));