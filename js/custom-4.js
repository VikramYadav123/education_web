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
  var owl = $(".aboutus-silder").owlCarousel({
      items: 1,                  // Show 1 item at a time
      loop: true,                // Infinite loop
      autoplay: true,            // Auto play
      autoplayTimeout: 5000,     // Interval between slides (5 seconds)
      autoplayHoverPause: true,  // Pause on hover
      dots: false,               // Disable default dots navigation
      nav: false,                // Disable default navigation arrows
  });

  // Custom pagination: Clicking on page numbers changes the slide
  $(".aboutus-section .pagination .page-link").on("click", function(e) {
      e.preventDefault();

      // Get the index of the clicked page number (subtract 1 for 0-based index)
      var index = $(this).text() - 1; // Subtract 1 to match the index (0-based)

      // Move the carousel to the corresponding slide
      owl.trigger('to.owl.carousel', [index, 300]);
  });

  // Sync pagination with carousel changes
  owl.on('changed.owl.carousel', function(event) {
      var currentIndex = event.item.index; // Get the index of the current slide

      // Adjust the index for the 0-based index
      var actualIndex = currentIndex % $(".aboutus-silder .item").length;

      // Update the pagination active class based on the current index
      $(".aboutus-section .pagination .page-item").removeClass('active');
      $(".aboutus-section .pagination .page-item").eq(actualIndex).addClass('active');
  });

  // Custom previous button (moves carousel to previous slide)
  $(".owl-prev").on("click", function(e) {
      e.preventDefault();
      owl.trigger('prev.owl.carousel');  // This triggers the "previous" slide
  });
  $(".owl-next").on("click", function(e) {
      e.preventDefault();
      owl.trigger('next.owl.carousel');  // This triggers the "next" slide
  });
});

$(document).ready(function () {
  // Footer Collapse: Toggle the visibility of footer submenus and rotate arrows
  $(".footer-title").click(function () {
    var targetMenu = $(this).data("bs-target");
    var arrow = $(this).find(".arrow i");

    // Collapse all footer menus first and remove the 'open' class from all arrows
    $(".footer-collapse").collapse('hide');
    $(".footer-title .arrow i").removeClass('open');

    // Toggle the clicked menu (open or close)
    $("#" + targetMenu).collapse('toggle');  

    // If the menu is open, add the 'open' class to the arrow icon
    if ($("#" + targetMenu).hasClass("show")) {
      arrow.addClass('open');
    }
  });
});

  
