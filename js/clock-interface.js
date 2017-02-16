$(document).ready(function(){
  // $('#time').text(moment(new Date()).format('H:mm'));

  setInterval(function() {
    $('#time').text(moment(new Date()).format('H:mm:ss'));
   }, 1000);


});
