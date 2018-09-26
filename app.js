function startTime() {
    var today = new Date();


    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var days = today.getDay();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('hej').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

// experation date
var experationDate = new Date("Sep 27, 2018 14:16:00").getTime();


var timeToExpire = setInterval(function () {
    var now = new Date().getTime();
    
    // get countdown
    function countdown() {
        // visa nedräkning av epirationDate och now
        var timeLeft = experationDate - now;
        return timeLeft;
    }

    var countDownVariable = countdown();

    var days = Math.floor(countDownVariable / (1000 * 60 * 60 * 24));
    var hours = Math.floor(countDownVariable % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) );
    var minutes = Math.floor(countDownVariable % (1000 * 60 * 60 * 24) / (1000 * 60) );
    var seconds = Math.floor(countDownVariable % (1000 * 60) /1000 );
    console.log('hours', hours, 'minutes', minutes, 'seconds', seconds, 'days', days);
    document.querySelector('#time-left').innerHTML = 'Days ' + days + ' Hours' + hours + 'Minutes' + minutes + ' Seconds' + seconds;
    // if time is done
    if (countDownVariable < 0 ) {
        clearInterval(timeToExpire);
        alert('done');
    }




}, 1000);




