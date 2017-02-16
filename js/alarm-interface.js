var Alarm = require("./../js/alarm.js").alarmModule;

$(document).ready(function () {

  var userInput;
  $("#AlarmButton").on('click',function(){
    userInput = moment($("#alarmTime").val(), "hh:mm A");
    $('#displayMessage').append('<p>Alarm set at ' + userInput.format("hh:mm A") +' </p>');
    Alarm();

  });
