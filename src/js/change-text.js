$(document).ready(function() {
  var texts = ["Desenvolvedor Fullstack", "Desenvolvedor Javascript", "UX/UI Designer"];
  var initial = 0;
  $('#changetext').text(texts[initial++]);
  setInterval(function() {
      $('#changetext').fadeOut(function() {
          if (initial >= texts.length) initial = 0;
          $('#changetext').text(texts[initial++]).fadeIn();
      });
  }, 3000);
});