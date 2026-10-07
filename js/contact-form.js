/* ---------------------------------------------
 Contact form
 --------------------------------------------- */
$(document).ready(function(){
    $("#submit_btn").click(function(){
        
        //get input field values
        var user_name = $('input[name=name]').val();
        var user_email = $('input[name=email]').val();
        var user_message = $('textarea[name=message]').val();
        
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if (user_name == "") {
            $('input[name=name]').css('border-color', '#e41919');
            proceed = false;
        }
        if (user_email == "") {
            $('input[name=email]').css('border-color', '#e41919');
            proceed = false;
        }
        
        if (user_message == "") {
            $('textarea[name=message]').css('border-color', '#e41919');
            proceed = false;
        }
        
        //everything looks good! proceed...
        if (proceed) {
            post_data = {
                'access_key': '1785220d-b7b0-4bcf-8d86-fc7d9939bdcb',
                'name': user_name,
                'email': user_email,
                'message': user_message
            };

            $.post('https://api.web3forms.com/submit', post_data, function(response){
                if (response.success) {
                    output = '<div class="success">Message sent! We\'ll be in touch soon.</div>';
                    $('#contact_form input').val('');
                    $('#contact_form textarea').val('');
                } else {
                    output = '<div class="error">Something went wrong. Please try again.</div>';
                }
                $("#result").hide().html(output).slideDown();
            }, 'json');
        }
        
        return false;
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function(){
        $("#contact_form input, #contact_form textarea").css('border-color', '');
        $("#result").slideUp();
    });
    
});
