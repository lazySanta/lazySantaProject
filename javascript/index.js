// here will be the JS code for web Santa



// code for clockdiv elemnet - countown to xmas

var deadline = 'December 25 2019';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t/1000) % 60);
  var minutes = Math.floor((t/1000/60) % 60);
  var hours = Math.floor((t/(1000*60*60)) % 24);
  var days = Math.floor(t/(1000*60*60*24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    clock.innerHTML = 'days to xmas: ' + t.days + '<br>' +
                      'hours: '+ t.hours + '<br>' +
                      'minutes: '+ t.minutes + '<br>' +
                      'seconds: '+ t.seconds;
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}

initializeClock('clockdiv', deadline);






// code for players name form which will display on the second page //

function processForm(){
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    l = unescape(temp[1]);
    document.getElementById("data").innerHTML = l;
}
processForm();
