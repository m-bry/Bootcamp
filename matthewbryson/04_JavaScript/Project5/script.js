$(document).ready(function() {
    var images = [
      "img/1.jpg",
      "img/2.jpg",
      "img/3.jpg",
      "img/4.jpg",
      "img/5.jpg",
      "img/6.jpg"
    ];
  
    var currentIndex = 0;
    var galleryImage = $("#gallery-image");
  
    function updateImage() {
      galleryImage.attr("src", images[currentIndex]);
    }
  
    $("#prev-btn").click(function() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    });
  
    $("#next-btn").click(function() {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    });
  
    // Initial image update
    updateImage();
  });
  