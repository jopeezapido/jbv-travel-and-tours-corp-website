//function that changes url when in home page

$(document).ready(function() {
    $('#home').click.(function() {
        function loadHome() {
            history.pushState({}, "Home", "");
        }
        loadHome();
    })
});