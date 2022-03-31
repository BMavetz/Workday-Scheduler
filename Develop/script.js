var AM9text = $('#9AM').children('textarea');
var AM10text = $('#10AM').children('textarea');
var AM11text = $('#11AM').children('textarea');
var PM12text = $('#12PM').children('textarea');
var PM1text = $('#1PM').children('textarea');
var PM2text = $('#2PM').children('textarea');
var PM3text = $('#3PM').children('textarea');
var PM4text = $('#4PM').children('textarea');
var PM5text = $('#5PM').children('textarea');
var curDay = moment().format('dddd, MMMM Do');
var curHour = moment().format('HH');

$("#currentDay").text(curDay);

function timeColorCode(){
var index = 0;
for(var hour = 9; hour < 18 ; hour++){
    if(hour > curHour){
        $('.container').children().eq(index).children('textarea').addClass('future'); 
    }else if(hour == curHour){
        $('.container').children().eq(index).children('textarea').addClass('present');
    }else if(hour < curHour){
        $('.container').children().eq(index).children('textarea').addClass('past');
    }
     index ++;
}
}

function loadPage() {
    AM9text.val(localStorage.getItem("9AM"));
    AM10text.val(localStorage.getItem("10AM"));
    AM11text.val(localStorage.getItem("11AM"));
    PM12text.val(localStorage.getItem("12PM"));
    PM1text.val(localStorage.getItem("1PM"));
    PM2text.val(localStorage.getItem("2PM"));
    PM3text.val(localStorage.getItem("3PM"));
    PM4text.val(localStorage.getItem("4PM"));
    PM5text.val(localStorage.getItem("5PM"));
    timeColorCode();
}

$('#9AM').children('button').on('click', function () {
    localStorage.setItem("9AM", AM9text.val());
    
})

$('#10AM').children('button').on('click', function () {
    localStorage.setItem("10AM", AM10text.val());
})

$('#11AM').children('button').on('click', function () {
    localStorage.setItem("11AM", AM11text.val());
})

$('#12PM').children('button').on('click', function () {
    localStorage.setItem("12PM", PM12text.val());
})

$('#1PM').children('button').on('click', function () {
    localStorage.setItem("1PM", PM1text.val());
})

$('#2PM').children('button').on('click', function () {
    localStorage.setItem("2PM", PM2text.val());
})

$('#3PM').children('button').on('click', function () {
    localStorage.setItem("3PM", PM3text.val());
})

$('#4PM').children('button').on('click', function () {
    localStorage.setItem("4PM", PM4text.val());
})

$('#5PM').children('button').on('click', function () {
    localStorage.setItem("5PM", PM5text.val());
})

loadPage();
