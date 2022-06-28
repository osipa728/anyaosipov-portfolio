let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// const student = document.getElementById('student');
//         console.log(student);
//         // const submarine = document.getElementById('submarine');
//         // const angles = document.getElementById('angles');
//         // const urban = document.getElementById('urban');
//         // const symbiosis = document.getElementById('symbiosis');
//         console.log('first');

//         student.addEventListener("click", activeLink);

//         function activeLink() {
//             console.log('clicked');
//             student.textContent = '→ Student Artist Works';
//             student.style.color = "#ffc0cb";
//         }