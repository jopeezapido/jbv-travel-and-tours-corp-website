$(document).ready(function({
    /*nav*/
    //active highlights for anchors

    $("#tours").mouseenter(function() {
        console.log('Enter Tours Section.');
    })
        
    //transluscent navigation when scrolling down


    

    /*about*/
    //google map APIs

    function initMap() {
        var prov = {
            lat: ,
            lng: 
        }// add geolocation

        //customize features of the map
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: prov
        });

        //input and postion the marker
        var marker = new.google.maps.Marker({
            position: prov,
            map: map
        });
    }

    /*Back to top button*/


    /*Page Translation*/



});