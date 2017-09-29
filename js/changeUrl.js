//function that changes url when in home page
    function loadHome() {
        history.pushState({}, "Home", "");
        history.back({}, "Home", "");
        history.forward({}, "Home", "");
    }

    loadHome();