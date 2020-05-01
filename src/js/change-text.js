$(document).ready(function() {
  var texts = ["Fullstack", "Front-End", "Back-End", "NodeJS", "ReactJS", "React Native"];
  var initial = 0;
  $('#changetext').text(texts[initial++]);
  setInterval(function() {
      $('#changetext').fadeOut(function() {
          if (initial >= texts.length) initial = 0;
          $('#changetext').text(texts[initial++]).fadeIn();
      });
  }, 3000);
});