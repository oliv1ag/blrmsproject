document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector('.btn');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const emailRegex = /\S+@\S+\.\S+/;
  
    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents the default form submission behavior
  
        // Validate email format
        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email address.');
            return;
        }
  
        // Validate password length
        if (passwordInput.value.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }
  
        // Add your login logic here
        // For example, you can redirect to another page
        window.location.href = 'survey.html';
    });
  });
  