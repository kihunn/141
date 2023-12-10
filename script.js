// script.js

// Function for form validation
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Check if any of the fields are blank
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill out all fields.');
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}

// Function for button rollover effect
function submitButtonRollover() {
    var submitButton = document.getElementById('submitButton');
    submitButton.style.backgroundColor = 'red';
}

function resetButtonColor() {
    var submitButton = document.getElementById('submitButton');
    submitButton.style.backgroundColor = '';
}

