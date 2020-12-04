$(document).ready(function(){
	
	$("#settings-form").validate({
		submitHandler : function(form) {
			$('#submit_btn').attr('disabled','disabled');
			$('#submit_btn').button('loading');
			form.submit();
		},
		rules : {
			companyName : {
				required : true,
				minlength: 3
			},
			address : {
				required : true,
				minlength: 3
			},
			phone : {
				required : true,
				minlength: 3
			},
			contactEmail : {
				required : true,
				minlength: 3
			},
			currency : {
				required : true
			}
		},
		messages : {
			companyName : {
				required : "Please enter compnay name"
			},
			address : {
				required : "Please enter company address"
			},
			phone : {
				required : "Please enter company phone number"
			},
			contactEmail : {
				required : "Please enter company contact email"
			},
			currency : {
				required : "Please choose currency"
			}
		},
		errorPlacement : function(error, element) {
			$(element).closest('div').find('.help-block').html(error.html());
		},
		highlight : function(element) {
			$(element).closest('div').removeClass('has-success').addClass('has-error');
		},
		unhighlight: function(element, errorClass, validClass) {
			 $(element).closest('div').removeClass('has-error').addClass('has-success');
			 $(element).closest('div').find('.help-block').html('');
		}
	});
	
	currency = $('#currency_hidden').val();
	if(currency !=''){
		$("#currency option").filter(function() {
		    //may want to use $.trim in here
		    return $(this).text() == currency; 
		}).attr('selected', true);
	}
	
});