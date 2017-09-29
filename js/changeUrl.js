//function that changes url when in home page

$(document).ready(function() {
    function loadHome() {
        window.history.pushState({}, "Home", "");
        window.history.back({}, "Home", "");
        window.history.forward({}, "Home", "");
    }
    loadHome();
});