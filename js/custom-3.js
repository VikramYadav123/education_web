///// Header Fix on Scroll /////

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            document.getElementById('manin-navbar').classList.add('sticky');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('manin-navbar').classList.remove('sticky');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});
$(document).ready(function(){
    // Initialize the Owl Carousel
    var owl = $('.placements-owl').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
    
    // Custom next and previous buttons
    $('#nextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    });

    $('#prevBtn').click(function() {
        owl.trigger('prev.owl.carousel');
    });
});
  
// Get the button element
let backToTopButton = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 100px or more
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 300) {
    backToTopButton.style.display = "block"; // Show button
  } else {
    backToTopButton.style.display = "none"; // Hide button
  }
};

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
});
$(document).ready(function() {
  // Initialize the Owl Carousel
  var owl = $(".placements-owl");

  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });

  // Left Arrow (Previous)
  $(".arrows .prev").click(function() {
    owl.trigger('prev.owl.carousel');
    updateActiveArrow("prev");
  });

  // Right Arrow (Next)
  $(".arrows .next").click(function() {
    owl.trigger('next.owl.carousel'); 
    updateActiveArrow("next");
  });

  function updateActiveArrow(direction) {
    if (direction === "prev") {
      $(".arrows .prev").addClass("active");
      $(".arrows .next").removeClass("active");
    } else if (direction === "next") {
      $(".arrows .next").addClass("active");
      $(".arrows .prev").removeClass("active");
    }
  }
});

$(document).ready(function() {
  $(".js-example-tags").select2({
    minimumResultsForSearch: Infinity  // This disables the search box in the dropdown
  });

  // Object to hold sub-discipline options for each discipline
  const subDisciplines = {
    arts: ['Painting', 'Sculpture', 'Literature', 'Photography'],
    'basic-science': ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
    dental: ['Orthodontics', 'Periodontology', 'Oral Surgery'],
    design: ['Graphic Design', 'Product Design', 'Interior Design']
  };

  // Show the second dropdown based on first dropdown selection
  $('#discipline').on('change', function() {
    var selectedDiscipline = $(this).val();
    
    // Clear previous options in the sub-discipline dropdown
    $('#sub-discipline').empty();
    
    // Add a default "Select Sub-discipline" option
    $('#sub-discipline').append('<option value="" selected disabled>Select Sub-discipline</option>');
    
    if (selectedDiscipline && subDisciplines[selectedDiscipline]) {
      // Populate the second dropdown with options based on the selected discipline
      var options = subDisciplines[selectedDiscipline];
      options.forEach(function(subDiscipline) {
        $('#sub-discipline').append('<option value="' + subDiscipline.toLowerCase().replace(' ', '-') + '">' + subDiscipline + '</option>');
      });
    }
  });
});
$(document).ready(function() {
  // Initialize Owl Carousel
  $(".aboutus-silder").owlCarousel({
      items: 1,                // Number of items to show
      loop: true,              // Infinite loop
      autoplay: true,          // Auto play
      autoplayTimeout: 5000,   // Autoplay interval (5 seconds)
      autoplayHoverPause: true,// Pause on hover
      dots: true,              // Show navigation dots
      nav: true,               // Show previous/next arrows
      navText: [
          '<i class="fa-solid fa-arrow-left"></i>',
          '<i class="fa-solid fa-arrow-right"></i>'
      ],
  });
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