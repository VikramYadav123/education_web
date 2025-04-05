///// Header Fix on Scroll /////
document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById('manin-navbar');
  const navbarHeight = document.querySelector('.navbar').offsetHeight;

  window.addEventListener('scroll', function() {
      if (window.scrollY > 250) {
          navbar.classList.add('sticky');
          document.body.style.paddingTop = navbarHeight + 'px';
      } else {
          navbar.classList.remove('sticky');
          document.body.style.paddingTop = '0';
      }
  });
});
// JavaScript for the counter animation odometer
document.addEventListener("DOMContentLoaded", function() {
  let odometer = document.querySelector(".odometer");
  let count = 0;
  const maxCount = 25;
  function incrementCounter() {
      if (count < maxCount) {
          count++;
          let digits = count.toString().split('');
          odometer.innerHTML = ''; 
          digits.forEach(digit => {
              let digitSpan = document.createElement('span');
              digitSpan.classList.add('digit');
              digitSpan.textContent = digit;
              odometer.appendChild(digitSpan);
          });
      }
  }
  setInterval(incrementCounter, 100);
});
$(document).ready(function() {
  // Initialize the Owl Carousel placements-owl
  $('.placements-owl').owlCarousel({
    loop: true,        
    margin: 30,               
    nav: false,              
    dots: false,              
    autoplay: true,           
    autoplayTimeout: 3000,   
    autoplayHoverPause: true, 
    responsive: {
      0: {
        items: 1              
      },
      600: {
        items: 2              
      },
      1000: {
        items: 4               
      }
    }
  });

  // Custom navigation functionality (for custom buttons)
  $('#prevBtn').click(function() {
    $('.placements-owl').trigger('prev.owl.carousel');
  });

  $('#nextBtn').click(function() {
    $('.placements-owl').trigger('next.owl.carousel');
  });
});
// Get the button element backToTopBtn
let backToTopButton = document.getElementById("backToTopBtn");
window.onscroll = function() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 300) {
  backToTopButton.style.display = "block";
} else {
  backToTopButton.style.display = "none";
}
};
backToTopButton.addEventListener("click", function() {
window.scrollTo({ top: 0, behavior: "smooth" }); 
});