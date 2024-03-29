document.addEventListener('DOMContentLoaded', () => {
          const links = document.querySelectorAll('a.btn-container'); // Target the links
          
          links.forEach(link => {
            link.addEventListener('click', function(e) {
              e.preventDefault(); // Prevent default navigation
              const target = this.getAttribute('href'); // Get the target page URL
        
              document.body.classList.add('fade-out'); // Apply fade-out effect
              
              setTimeout(() => {
                window.location.href = target; // Change to the target page after animation
              }, 500); // Match this timeout with the animation-duration of fadeOut
            });
          });
        });
