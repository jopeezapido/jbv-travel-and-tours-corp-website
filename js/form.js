$(document).ready(function() {
  $('#form').formValidation();
  $('form').submit(function(event) {
    event.preventDefault();
    alert('No val!')
  });
});