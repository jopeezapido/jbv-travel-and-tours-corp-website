//function that changes url when in home page

var parent = document.querySelector("nav");

parent.addEventListener("popstate", loadUrl);

function loadUrl(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        var url = "/" + clickedItem;
        history.pushState(clickedItem, null, url);
        //alert(clickedItem);
    }
    e.stopPropagation();
}