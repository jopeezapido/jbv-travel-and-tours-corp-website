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
        if(crtName.test(name)) {
            if(confirm == "YES" {
                //tell the sender that email was sent
                var confirm = prompt("Type YES to confirm sending");
                //some code that submits a link to a specified email recipient

                alert('Email Sent!\nKindly wait for a response within 24 hours via email or phone.');

                //code that refreshes the page to go back to the top
                
            } else {
                prompt('Try again. Click OK to continue or click CANCEL to review again your inputs.')
            }
            
        } else {
            alert('Review your inputs.\nKindly ensure you typed the right format.')
        }
    });
})

