$(document).ready(function() {
  $('#form').validator().click('submit', function(event) {
    if(event.isDefaultPrevented()){
      alert('Check format if correct')
    } else {
      alert('Sent');
    }
  })
});