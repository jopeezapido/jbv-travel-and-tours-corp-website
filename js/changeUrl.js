//function that changes url when in home page

$(document).ready(function() {
    function loadHome() {
        history.pushState({}, "Home", "/Home");
    }
    loadHome();
});