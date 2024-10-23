//Subscribe Form
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const emailInput = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailPattern.test(emailInput)) {
      const errorMessage = document.getElementById('error-message');
      errorMessage.textContent = 'Please enter a valid email address !';
      errorMessage.style.display = 'block';
    } else {
      document.getElementById('error-message').style.display = 'none';

      alert('Thanks For Subscribing!');
      
      document.getElementById('myForm').reset();
    }
  });

// Active Nav Bar
function setActiveNav() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
  
    navLinks.forEach(link => {
      link.classList.remove('active');
  
      if (link.getAttribute('href') === currentPath.split('/').pop()) {
        link.classList.add('active');
      }
    });
  }
  
  function navActive(event) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
  
    event.target.classList.add('active');
  }
  
  setActiveNav();
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', navActive);
  });

  //back to top button
  let mybutton = document.getElementById("btn-back-to-top");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Scroll animation
  const animationClasses = ['animation1', 'animation2', 'animation3'];
  const observers = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('scroll-animation');
          } else {
              entry.target.classList.remove('scroll-animation');
          }
      });
  }, { threshold: 0.5 });

  // Observe all animations in the defined classes
  animationClasses.forEach((animationClass) => {
      const elements = document.querySelectorAll(`.${animationClass}`);
      elements.forEach((element) => {
          observers.observe(element);
      });
  });

// Counter Animation 
function animateCounter(element, target) {
    let count = 0;
    const increment = Math.ceil(target / 100); 
    const duration = 1000; 
    const interval = Math.round(duration / (target / increment));
  
    const counter = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target; 
        clearInterval(counter);
      }
      element.textContent = count.toLocaleString();
    }, interval);
}

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter-stat");

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute("data-target"));

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        }, {
            rootMargin: "50px",
        });

        observer.observe(counter);
    });
});
  