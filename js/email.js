$(function () {
    // when the form is submitted
    $('#form').on('submit', function (e) {

		e.preventDefault();

        // if the validator does not prevent form submit
        // if (!e.isDefaultPrevented()) {
        if (true) {
            var url = "php/email.php";
            
            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
					console.log(data)
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#form').find('.messages').html(alertBox);
                        // empty the form
                        $('#form')[0].reset();
                    }
                },
                failure: function (error)
                {
                	console.log(error)
                }
            });
            return false;
        }
    })
});