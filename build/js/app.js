(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var Alarm=require("./../js/alarm.js").nowModule;

$(document).ready(function () {

  var userInput;
  $("#AlarmButton").on('click',function(){
    userInput = moment($("#alarmTime").val(), "hh:mm A");
    $('#displayMessage').append('<p>Alarm set at ' + userInput.format("hh:mm A") +' </p>');

  });



  var set = setInterval(function(){
    console.log("set interval started");

  var currentTime = moment();


     if (userInput.diff(currentTime) < 0) {
        console.log("time's up");
        $('#displayMessage').append("<h1> Fuck I'm Done!</h1>");
        clearInterval(set);
     };

   }, 1000);

});

$(document).ready(function(){
  // $('#time').text(moment(new Date()).format('H:mm'));

  setInterval(function() {
    $('#time').text(moment(new Date()).format('H:mm:ss'));
   }, 1000);


});

},{}]},{},[1]);
