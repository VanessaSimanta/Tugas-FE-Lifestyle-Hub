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
  }, { threshold: 0.2 });

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

// Subscribe Form
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    validateFormSubs(this);
});

// Contact Form
document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    validateFormContact(this);
});

// Validation Subscribe Form
function validateFormSubs(form) {
    const nameInput = form.querySelector('input[name="firstname"]'); 
    const emailInput = form.querySelector('input[type="email"]');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const invalidFeedbacks = form.querySelectorAll('.invalid-feedback');
    invalidFeedbacks.forEach(feedback => feedback.style.display = 'none');

    // Validate name input
    if (!nameInput.value) {
        nameInput.classList.add('is-invalid');
        nameInput.nextElementSibling.style.display = 'block'; 
    } else {
        nameInput.classList.remove('is-invalid');
    }

    // Validate email input
    if (!emailPattern.test(emailInput.value)) {
        emailInput.classList.add('is-invalid');
        emailInput.nextElementSibling.style.display = 'block'; 
    } else {
        emailInput.classList.remove('is-invalid');
    }

    if (nameInput.value && emailPattern.test(emailInput.value)) {
        alert('Thanks For Subscribing!');
        form.reset(); 
    }
}

// Validation for Contact Form
function validateFormContact(form) {
    const nameInput = form.querySelector('input[name="name"]'); 
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const invalidFeedbacks = form.querySelectorAll('.invalid-feedback');
    invalidFeedbacks.forEach(feedback => feedback.style.display = 'none');

    // Validate name input
    if (!nameInput.value) {
        nameInput.classList.add('is-invalid');
        nameInput.nextElementSibling.style.display = 'block'; 
    } else {
        nameInput.classList.remove('is-invalid');
    }

    // Validate email input
    if (!emailPattern.test(emailInput.value)) {
        emailInput.classList.add('is-invalid');
        emailInput.nextElementSibling.style.display = 'block'; 
    } else {
        emailInput.classList.remove('is-invalid');
    }

    // Validate message input
    if (!messageInput.value) {
        messageInput.classList.add('is-invalid');
        messageInput.nextElementSibling.style.display = 'block'; 
    } else {
        messageInput.classList.remove('is-invalid');
    }

    if (nameInput.value && emailPattern.test(emailInput.value) && messageInput.value) {
        alert('Your Message Has Been Sent! Thank You');
        form.reset(); 
    }
}
 

    document.addEventListener('DOMContentLoaded', function() {
        const searchForm = document.querySelector('form[role="search"]');
        
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting the traditional way
            
            const searchInput = document.getElementById('searchInput').value;
            
            // Log the search input to the console (replace this with your search logic)
            console.log('Searching for:', searchInput);
            
            // You can implement your search logic here
            // For example, filter a list of items or make an API call
            
            // Example: Filtering an array of items (you can replace this with your own data)
            const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'];
            const filteredItems = items.filter(item => 
                item.toLowerCase().includes(searchInput.toLowerCase())
            );
            
            // Display the results (for demonstration, logging to console)
            console.log('Filtered Items:', filteredItems);
        });
    });
