$(document).ready(function() {
    //test the email if it is a valid email

    var phone = document.getElementById('phone').value;//gets the value entered in by the sender n the input
    //console.log(phone);
    var regex = /^[0-9]+$/g;
    console.log(phone.match(regex));

    //test the phone if it is a valid number
        function valPhone() {
            if(phone.match(regex)) {
                return false;
                console.log(false)
            } else {
                return true;
                console.log(true);
            }
        }

    //test everything once submit button is clicked

    /*$('#submit').click(function() {
        if(valPhone == true) {
            alert('Email Sent');
        } else if(valPhone == false){
            //code to send to email
            //$(location).attr('href', )
            alert('Input a valid number');
        }
    })*/
})


