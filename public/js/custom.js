$(function(){


    $('#button').on('click', function(){
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        console.log(name, email, message)
        $.ajax({
            type: 'POST',
            url: '/message',
            
            data: {
                name: name,
                email: email,
                message: message
            },
            success: function () {
                
                
            },
            error: function (err) {
                console.log(err)
            }
        }); 
        
        $('#message').val('');

        
    });
});