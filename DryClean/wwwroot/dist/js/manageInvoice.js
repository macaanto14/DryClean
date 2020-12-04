$(document).ready(function(){
	
	$("#emailForm").validate({
		submitHandler : function(form) {
			$('#email_btn').attr('disabled','disabled');
			$('#email_btn').button('loading');
			
			return false;
		},
		rules : {
			invoiceEmail : {
				required : true,
				email: true
			}
		},
		messages : {
			invoiceEmail : {
				required : "Please enter email"
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
	
	
	$(document).on('click','.printEmail', function(){
		uuid = $(this).data('uuid');
		$('#email_btn').button('reset');
		$('#emailModal').modal('show');
		$('#invoiceUuid').val( uuid );
	});
	
	
	
	$(document).on('click', '#email_btn',function(){
		
		if($('#emailForm').valid()){
			$(this).button('loading');
			email = $('#invoiceEmail').val();
			uuid  = $('#invoiceUuid').val();
			$.ajax({
				url : 'ajax.php',
				dataType: "json",
				method: 'post',
				data: {
				   email: email,
				   uuid : uuid,
				   type: 'sendEmail'
				},
				success: function( data ) {
					 $('#email_btn').button('reset');
					 $('#emailModal').modal('hide');
					 $('#successEmail').modal('show');
					 
				}
			});
		}
		
	});
});


function printInvoice( id ) {
	printContent = $('#'+id).html();
	$('#PrintIframe').contents().find('html').html(printContent);
	var ua = window.navigator.userAgent;
    var msie = ua.indexOf ("MSIE");
    var iframe = document.getElementById('PrintIframe');
    if (msie > 0) {
        iframe.contentWindow.document.execCommand('print', false, null);
    } else {
        iframe.contentWindow.print();
    }
}