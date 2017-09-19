
var pauses =
[1.5, 2.8, 4.1, 5.44, 6.7, 8, 9.5, 10.8, 
12.3, 13.8, 15.2, 16.7, 18.2, 19.5, 21.1,
22.51, 24.1, 25.65, 27.35, 28.6, 29.86, 31.4,
32.77, 34.28, 35.73, 37.32, 51]; 

var fullVid = document.getElementById("vid");

var sendmessage = function(message) {
  myLoop(message+" ");
}

var i = 0;
function myLoop(message)
  {
    fullVid.play();
    setTimeout(function(){
      var index = message.charCodeAt(i) - 97;
      if(index > 25 || index < 0)
        index = 26;

      fullVid.currentTime = pauses[index];
      i++;
      if(i < message.length)
      {
        myLoop(message);
      }
      else
      {
        i=0;
        fullVid.pause();
      }
    }, 200);
  }

