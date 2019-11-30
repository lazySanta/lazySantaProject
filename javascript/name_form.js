// here will be the JS code for web Santa


// code for players name form which will display on the second page //

function processForm(){
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    l = unescape(temp[1]);
    document.getElementById("data").innerHTML = l;
}
processForm();
