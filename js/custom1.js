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
// $(document).ready(function() {
//   // Initialize the Owl Carousel placements-owl
//   $('.placements-owl').owlCarousel({
//     loop: true,        
//     margin: 30,               
//     nav: false,              
//     dots: false,              
//     autoplay: true,           
//     autoplayTimeout: 5000,   
//     autoplayHoverPause: true, 
//     responsive: {
//       0: {
//         items: 1              
//       },
//       600: {
//         items: 2              
//       },
//       1000: {
//         items: 4               
//       }
//     }
//   });

//   // Custom navigation functionality (for custom buttons)
//   $('#prevBtn').click(function() {
//     $('.placements-owl').trigger('prev.owl.carousel');
//   });

//   $('#nextBtn').click(function() {
//     $('.placements-owl').trigger('next.owl.carousel');
//   });
// });
$(document).ready(function() {
  // Initialize Owl Carousel with autoplay and custom navigation
  $('.placements-owl').owlCarousel({
    loop: true,        
    margin: 30,               
    nav: false,              
    dots: false,              
    autoplay: true,           
    autoplayTimeout: 4000,   
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

  // Custom navigation functionality
  $('#prevBtn').click(function() {
    $('.placements-owl').trigger('prev.owl.carousel');
  });

  $('#nextBtn').click(function() {
    $('.placements-owl').trigger('next.owl.carousel');
  });
  $('.placements-owl').trigger('play.owl.autoplay', [4000]);
});
// Get the button element backToTopBtn
// let backToTopButton = document.getElementById("backToTopBtn");
// window.onscroll = function() {
// if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 300) {
//   backToTopButton.style.display = "block";
// } else {
//   backToTopButton.style.display = "none";
// }
// };
// backToTopButton.addEventListener("click", function() {
// window.scrollTo({ top: 0, behavior: "smooth" }); 
// });
                        
// Toggle the "View All" button and show more images
const viewAllBtn = document.getElementById('viewAllBtn');
const extraImages = document.querySelectorAll('.extra-images');

viewAllBtn.addEventListener('click', function() {
    // Show extra images when "View All" is clicked
    extraImages.forEach(image => {
        image.style.display = 'block';
    });
    // Hide the "View All" button after it has been clicked
    viewAllBtn.style.display = 'none';
});

$(document).ready(function () {
  $(".footer-title").click(function () {
    var targetMenu = $(this).data("bs-target");
    $("#" + targetMenu).collapse('toggle');  
    var arrow = $(this).find(".arrow i");
    if ($("#" + targetMenu).hasClass("show")) {
      arrow.addClass('open');
    } else {
      arrow.removeClass('open');
    }
  });
});
