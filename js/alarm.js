var Alarm = function(){

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

};







exports.alarmModule=Alarm;
