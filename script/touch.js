function send(data){
	$.ajax({	
		type: "POST",
		url: "script/mail.php",
		data: data,
		cache: false,
		success: function(html){
				$('#sent').delay('3000').fadeIn();
			},
		error: function(html){
				$('#failed').delay('3000').fadeIn();
			},
	});
}

$(document).ready(function() {

	$("#touch button").click(function(){
		event.preventDefault();
		$('#sent').hide();
		$('#failed').hide();
		$('#touch input').css('box-shadow', '0 0 3pt 2pt rgba(45,150,45,0.8)'); 
		$('#touch textarea').css('box-shadow', '0 0 3pt 2pt rgba(45,150,45,0.8)');
		
		var valid = true;
		var name = $("#name").val();
		var email = $("#email").val();
		var subject = $("#subject").val();
		var message = $("#message").val();
		
		if (name.length<1) {
			$('#name').css('box-shadow', '0 0 3pt 2pt rgba(146,24,42,0.8)');
			valid=false;
		}
		
		if (!email.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			$('#email').css('box-shadow', '0 0 3pt 2pt rgba(146,24,42,0.8)');
			valid=false;
		}
		
		if (subject.length<1) {
			$('#subject').css('box-shadow', '0 0 3pt 2pt rgba(146,24,42,0.8)');
			valid=false;
		}
		
		if (message.length<1) {
			$('#message').css('box-shadow', '0 0 3pt 2pt rgba(146,24,42,0.8)');
			valid=false;
		}
		
		if (valid) {
			$('#sent').fadeIn();
			var data="name=" + nome + "&email=" + email + "&subject=" + subject + "&message=" + message;
			send(data);
			$('#sent').delay('1500').fadeOut();
		}	
	});
});