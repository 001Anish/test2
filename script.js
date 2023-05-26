// Function to send registration data to the server using AJAX
function sendRegistrationData(data) {
    // Create an AJAX request object
    var xhr = new XMLHttpRequest();
  
    // Define the request parameters
    xhr.open('POST', 'http://example.com/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
  
    // Set up the event handler for when the request completes
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Registration successful
        localStorage.setItem('registrationData', JSON.stringify(data)); // Store data in local storage
        window.location.href = 'datalist.html'; // Redirect to the data list page
      } else {
        // Registration failed
        console.log('Registration failed. Please try again.');
      }
    };
  
    // Convert the data to JSON and send the request
    xhr.send(JSON.stringify(data));
  }
  
  // Function to handle the form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get the form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
  
    // Create an object with the registration data
    var data = {
      name: name,
      email: email,
      phone: phone
    };
  
    // Send the registration data to the server
    sendRegistrationData(data);
  }
  
  // Add event listener to the form submit button
  var form = document.getElementById('registration-form');
  form.addEventListener('submit', handleSubmit);
  