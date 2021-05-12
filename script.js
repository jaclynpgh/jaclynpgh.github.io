//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto

//makes images slide on home screen
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var slides = document.getElementsByClassName("carousel");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // change every two seconds
}