$(document).ready(function() {
    //test everything once submit button is clicked
    $('#submit').click(function() {
        var name, phone, email, msg;
        var crtName, crtPhone, crtEmail, crtMsg;
        
        //retrieves value
        name = document.getElementById("name").value;
        phone = document.getElementById("tel").value;
        email = document.getElementById("email").value;
        msg = document.getElementById("msg").value;

        //set criteria
        crtName = /([a-z])/ig;
        crtPhone = /([()+0-9])/g;
        crtEmail = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;

        //debug or test
        //alert(name +"\n" + phone +"\n" + email +"\n" + msg);

        //decision flow
        if(crtName.test(name) && crtPhone.test(tel) && crtEmail.test(email)) {
            //some code that submits a link to a specified email recipient

            //'Are you sure' prompt
            var confirm = prompt("Type 'Yes' to confirm sending");

            if(confirm == /(Yes)/ig) {
                //tell the sender that email was sent
                alert('Email Sent!\nKindly wait for a response within 24 hours via email or phone.');
            } else {
                prompt('Try again. Click "Yes" to continue, click back to review again your inputs.')
            }

            //code that refreshes the page to go back to the top
            
        } else {
            alert('Review your inputs.\nKindly ensure you typed the right format.')
        }
    });
})

