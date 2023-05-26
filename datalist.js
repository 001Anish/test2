// Function to retrieve the registration data from local storage
function getRegistrationData() {
    var data = localStorage.getItem('registrationData');
    return data ? JSON.parse(data) : [];
  }
  
  // Function to display the registration data in the list
  function displayRegistrationData() {
    var dataList = document.getElementById('data-list');
    var registrationData = getRegistrationData();
  
    registrationData.forEach(function(entry) {
      var listItem = document.createElement('li');
      listItem.textContent = entry.name + ' - ' + entry.email + ' - ' + entry.phone;
      dataList.appendChild(listItem);
    });
  }
  
  // Call the function to display the registration data
  displayRegistrationData();
  