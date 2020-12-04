$(document).ready(function(){
	
	$("#product-form").validate({
		submitHandler : function(form) {
			$('#submit_btn').attr('disabled','disabled');
			$('#submit_btn').button('loading');
			form.submit();
		},
		rules : {
			customerName : {
				required : true,
				minlength: 3
			},
			phone : {
				required : true,
				minlength: 3
			},
			addressLine1 : {
				required : true,
				minlength: 3
			},
			addressLine2 : {
				required : true,
				minlength: 3
			},
			city : {
				required : true,
				minlength: 3
			},
			state : {
				required : true,
				minlength: 3
			},
			country : {
				required : true
			}
		},
		messages : {
			customerName : {
				required : "Please enter customer name"
			},
			phone : {
				required : "Please enter phone number"
			},
			addressLine1 : {
				required : "Please enter addressLine1"
			},
			addressLine2 : {
				required : "Please enter addressLine2"
			},
			city : {
				required : "Please enter city name"
			},
			state : {
				required : "Please enter state name"
			},
			country: {
				required : "Please choose country"
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
	
	country = $('#country_hidden').val();
	if(country !=''){
		$("#country option").filter(function() {
		    //may want to use $.trim in here
		    return $(this).text() == country; 
		}).attr('selected', true);
	}
});