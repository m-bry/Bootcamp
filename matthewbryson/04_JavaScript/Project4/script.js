$(document).ready(function() {
    var images = ["img/background1.jpg", "img/background2.jpg", "img/background3.jpg"];
    var texts = ["AN ONLINE MARKETPLACE FOR PEOPLE WHO LOVE COOKIES. COMING SOON!", "COOKIES ARE KING", "COOKIE TIME!"];
    var currentIndex = 0;
  
    function changeBackground() {
      var imageUrl = 'url("' + images[currentIndex] + '")';
      $('#background-image').css('background-image', imageUrl);
      $('#text').text(texts[currentIndex]);
  
      currentIndex = (currentIndex + 1) % images.length;
    }
    changeBackground();
  
    // Change the background every 3 seconds
    setInterval(changeBackground, 3000);
  });