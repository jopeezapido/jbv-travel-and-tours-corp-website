$(document).ready(function() {
  $('#submit').validator().click(function(event) {
    if(event.isDefaultPrevented()){
      alert('Check format if correct')
    } else {
      alert('Sent');
    }
  })
});