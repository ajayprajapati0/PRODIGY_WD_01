// window.addEventListener('scroll', function() {
//     var navbar = document.getElementById('navbar');
//     if (window.scrollY > 0) {
//       navbar.classList.add('scrolled');
//     } else {
//       navbar.classList.remove('scrolled');
//     }
//   });
  


window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var navLinks = navbar.querySelectorAll('a');
    var logoImage = document.getElementById('logo-image');
  
    if (window.scrollY > 0) {
      // Change the navbar background color
      navbar.classList.add('scrolled');
      
      // Change the text color of navLinks
      navLinks.forEach(function(link) {
        link.classList.add('scrolled-link');
      });
  
      // Change the logo image source when scrolled
      logoImage.src = 'assets/scrolled-logo.svg'; // Replace with the path to your scrolled logo image
    } else {
      // Revert the navbar background color
      navbar.classList.remove('scrolled');
      
      // Revert the text color of navLinks
      navLinks.forEach(function(link) {
        link.classList.remove('scrolled-link');
      });
  
      // Change back to the original logo image source when at the top
      logoImage.src = 'assets/logo.svg'; // Replace with the path to your original logo image
    }
  });
  
  