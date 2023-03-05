// Select all links with a hash in the href attribute
const links = document.querySelectorAll('a[href^="#"]');

// Add click event listener to each link
links.forEach(link => {
  link.addEventListener('click', scrollToSection);
});
function scrollToSection(event) {
    // Prevent default behavior of link
    event.preventDefault();
  
    // Get the ID of the target element from the link's href attribute
    const targetId = this.getAttribute('href');
  
    // Calculate the target position of the element
    const targetPosition = document.querySelector(targetId).offsetTop;
  
    // Scroll to the target position with smooth animation
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
  