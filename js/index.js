$(document).ready(function() {
   
  
  var sec = 60;
  var minutes = 24;
  $('#setMinute').text(minutes + 1);

  $('#addMinute').click(function() {
    minutes++;
    $('#setMinute').text(minutes + 1);

  });
  $('#lessMinute').click(function() {
    minutes--;
    $('#setMinute').text(minutes + 1);

  });
  
  var countdown;

  var timer = function() {
    sec--;
    if (sec >= 10) {
      $('.seconds').text(sec)
    } else {
      $('.seconds').text("0" + sec)
    };
    if (minutes >= 10) {
      $('.minutes').text(minutes + ':')
    } else {
      $('.minutes').text("0" + minutes + ":")
    };
    if (sec === 0) {
      sec = 60;
      minutes--;
    };
    if (minutes < 0) {
      clearInterval(countdown);
      $('#startTimer').show();
      $('#lessMinute').show();
      $('#setMinute').show();
      $('#addMinute').show();
      $('.minutes').hide();
      $('.seconds').hide();
       $('#pomoVideo').show();
      $('#instructions').show().text("Go Again!")
      $('#pause').hide();
    $('#reset').hide();
      $('.alarm').get(0).play();
      sec = 60;
      minutes = 24;
      
    }
  }
  $('#pause').click(function(){
    clearInterval(countdown);
    $('#pause').toggle();
    $('#resume').toggle();
   
  });
  
  $('#resume').click(function(){
    $('#pause').toggle();
    $('#resume').toggle();  
    timer();
    countdown= setInterval(timer, 1000);
    
  });
  
  $('#reset').click(function(){
    $('#instructions').text('');
    clearInterval(countdown);
    minutes=24;
    sec=60;
    $('#startTimer').show();
    $('#lessMinute').show();
    $('#setMinute').show();
    $('#addMinute').show();
    $('#pause').hide();
    $('#resume').hide();
    $('#reset').hide();
     $('#pomoVideo').show();
    $('.activeTime').children().hide();
  });
  
  $('#startTimer').click(function() {
    $('.activeTime').children().show();
    timer();
    $('#instructions').hide();
    $('#startTimer').hide();
    $('#lessMinute').hide();
    $('#setMinute').hide();
    $('#addMinute').hide();
    $('#pomoVideo').hide();
    $('#pause').show();
    $('#reset').show();
    countdown = setInterval(timer, 1000);
    return countdown;

  });

 $('#pomoVideo').click(function(){
    $('iframe').show();
   $('body').addClass("darkBackground");
   $('#startTimer').hide();
   $('#pomoVideo').hide();
   $('#return').show();
   
   });
   $('#return').click(function(){
    $('iframe').hide();
   $('body').removeClass("darkBackground");
   $('#startTimer').show();
   $('#pomoVideo').show();
   $('#return').hide();
   
   });
  
});