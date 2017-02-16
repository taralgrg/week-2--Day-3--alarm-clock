var Alarm=require("./../js/alarm.js").alarmModule;

$(document).ready(function () {

  var userInput;
  $("#AlarmButton").on('click',function(){
    userInput = moment($("#alarmTime").val(), "hh:mm A");
    $('#displayMessage').append('<p>Alarm set at ' + userInput.format("hh:mm A") +' </p>');

  });

$(document).ready(function(){
  // $('#time').text(moment(new Date()).format('H:mm'));

  setInterval(function() {
    $('#time').text(moment(new Date()).format('H:mm:ss'));
   }, 1000);


});
