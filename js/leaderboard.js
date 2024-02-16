const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('image-animation');
      }
    });
  });
  
  const viewbox = document.querySelectorAll('.image');
  viewbox.forEach(image => {
    observer.observe(image);
  });

function scrollToElement(elementId) {   
    var element = document.getElementById(elementId);
    var offset = element.getBoundingClientRect().top;
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    var targetScrollPosition = scrollPosition + offset;

    // adjust this variable's numeric value for scroll delay
    var delay = 100; // milliseconds

    setTimeout(function() {
        window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth'
        });
    }, delay);
