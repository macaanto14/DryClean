$(document).ready(function(){
	
	$("#register").validate({
		submitHandler : function(form) {
			$('#submit_btn').attr('disabled','disabled');
			$('#submit_btn').button('loading');
			form.submit();
		},
		rules : {
			first_name : {
				required : true
			},
			last_name : {
				required : true
			},
			email : {
				required : true,
				email: true,
				remote: {
					url: "check-email.php",
					type: "post",
					data: {
						email: function() {
							return $( "#email" ).val();
						}
					}
				}
			},
			password : {
				required : true,
				minlength:3
			},
			confirm_password : {
				required : true,
				equalTo: "#password"
			}
		},
		messages : {
			first_name : {
				required : "Please Enter First Name"
			},
			last_name : {
				required : "Please Enter Last Name"
			},
			email : {
				required : "Please enter email",
				remote : "Email already exists"
			},
			password : {
				required : "Please enter password",
				minlength : 'Please enter minimum 3 characters'
			},
			confirm_password : {
				required : "Please enter confirm password",
				equalTo: "Password and confirm password doesn't match"
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
	
	
});