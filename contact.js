//Contact Form Source: https://bootstraptemple.com/p/how-to-build-a-working-bootstrap-contact-form

$(function() {


    $('#contact-form').on('submit', function(e) {
        if (!e.isDefaultPrevented()) {
            var url = "http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function(data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});