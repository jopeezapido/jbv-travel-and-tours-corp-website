$(document).ready(function() {
  $('#submit').click(function() {
    var name, contact, email, msg;
    var testName, testContact, testEmail, testMsg;
    
    //retrieve what values are written in the form inputs
    name = document.getElementById("name").value;
    contact = document.getElementById("tel").value;
    email = document.getElementById("email").value;
    msg = document.getElementById("message").value;
    
    //criteria for testing values
    testName = /([a-z])/ig.test(name);
    testContact = /([()+0-9])/g.test(contact);
    testEmail = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/.test(email);
 
    switch(false) {
      case testName:
        alert('Check format!');
      case testContact: 
        alert('Check format!');
      case testEmail:
        alert('Check format!');
      default:
        alert('Sent!');
    } 
    
  });
});

