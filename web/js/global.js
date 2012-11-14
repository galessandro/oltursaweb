$.contactForm = (function() {
	
	var inputs = ['url', 'email', 'datetime', 'date', 'month', 'week', 'time', 'datetime-local', 'number', 'color', 'range'],
		input = document.createElement('input')
	    len = inputs.length,
	    uiSupport = {},
		i = 0,
		widgets = {
			date : function(elem) { 
				elem.datepicker({
					beforeShow : function(input, inst) {
				    	inst.dpDiv.css({
							fontSize : '14px',
							marginLeft : 215,
							marginTop : -22
						});
				    }
				});
			},
			range : function(elem) { 
				elem
					.after('<div></div><span class="slider-val">1500</span>')
					.next()
					.slider({
						value : 1500,
						min : 500,
						max : 4000,
						step : 500,
						slide: function(event, ui) {			
							$(this).next().text(ui.value);
						}
					})
					.end()
					.remove();
			},
			altrange : function(elem) { 
				elem
					.addClass('ui-slider')
					.after('<span class="slider-val">1500</span>')
					.change(function() {
						$(this).next().text($(this).val());
					});
			}		
		};
		
	for (; i < len; i++) {
		input.setAttribute('type', inputs[i]);
		
		if (input.type === 'text') {
			uiSupport[inputs[i]] = false;
		} else {
			input.value = 'testing';		
			(input.value === 'testing') ? uiSupport[inputs[i]] = false : uiSupport[inputs[i]] = true;
		}
	}
	
	for (var prop in uiSupport) {
		if (prop === 'range') {
			widgets[(uiSupport[prop] ? 'alt' : '') + prop]($('input[type=' + prop + ']', 'form'));
		}
		if (prop === 'date' && !uiSupport[prop]) {
			widgets[prop]($('input[type=' + prop + ']', 'form'));
		}
	}	

	$('input[type=time]').attr('disabled','disabled');
	$('input[type=radio]').click(function() {
		if ($(this).val() === 'Phone') {
			$('input[type=time]').removeAttr('disabled');
		} else {
			$('input[type=time]').attr('disabled','disabled');	
		}
	});
	
})();

$.validator.addMethod('letters', function(value) {
	return value.match(/^[- a-zA-Z]+$/);
});

$('form').validate({
    rules : {
		name : {
            required : true,
            letters : true
        },
		email :  {
            required : true,
            email : true
        },
		telephone :  {
            required : true,
            digits : true,
            minlength : 11,
            maxlength : 11
        },
		website : {
            url : true
        },
		'contact-time' : {
            required : function(element) {
                return $('.contact-method input:last').is(':checked');
            }
        }
	},
    messages : {
		name : {
            required : 'The name field cannot be blank',
            letters : 'Please enter letters only'
        },
		email :  {
            required : 'The email field cannot be blank',
            email : 'Please enter a valid email address'
        },
		telephone :  {
            required : 'The telephone field cannot be blank',
            digits : 'Please enter numbers only',
            minlength : 'Please enter a UK phone number (11 digits)',
            maxlength : 'Please enter a UK phone number (11 digits)'
        },
		website : {
            url : 'Please enter a valid url'
        },
		'contact-time' : {
            required : 'The contact time field cannot be blank'
        }
    }
});








































