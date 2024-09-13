document.getElementById('learnMoreBtn').addEventListener('click', function() {
    window.location.href = '#info';
});

  // Select all the links
  const links = document.querySelectorAll('.links a');
  const customerImage = document.getElementById('customer-image');

  // Add event listener to each link
  links.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default anchor behavior
          
          // Get the image URL from the data attribute
          const imageSrc = link.getAttribute('data-image');
          
          // Update the image src
          customerImage.src = imageSrc;
      });
  });
