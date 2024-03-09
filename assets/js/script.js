"use strict";

let leftIcon = document.querySelector(".slider-area .slide-icons .left-icon");
let rightIcon = document.querySelector(".slider-area .slide-icons .right-icon");


rightIcon.addEventListener("click",function(){
  let activeImage = document.querySelector(".active-image");
  activeImage.classList.remove("active-image");
  if(activeImage.nextElementSibling != null){
    activeImage.nextElementSibling.classList.add("active-image");
  }
  else{
    this.parentNode.nextElementSibling.firstElementChild.classList.add("active-image")
  }
});


leftIcon.addEventListener("click",function(){
  let activeImage = document.querySelector(".active-image");
  activeImage.classList.remove("active-image");
  if(activeImage.previousElementSibling != null){
    activeImage.previousElementSibling.classList.add("active-image");
  }
  else{
    this.parentNode.nextElementSibling.lastElementChild.classList.add("active-image")
  }
});



setInterval(nextSlide, 5000);

let touchStartX = 0;
document.addEventListener("touchstart", function(event) {
  touchStartX = event.touches[0].clientX;
}, false);

document.addEventListener("touchend", function(event) {
  const touchEndX = event.changedTouches[0].clientX;
  if (touchStartX - touchEndX > 50) {
    nextSlide();
  } else if (touchEndX - touchStartX > 50) {
    prevSlide();
  }
}, false);

showSlide(slideIndex);

