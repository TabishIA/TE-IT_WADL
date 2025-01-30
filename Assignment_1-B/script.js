document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create user object
    const user = {
        name: name,
        email: email,
        password: password
    };

    // Store in local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Send data via AJAX POST (recommended for sensitive data)
    sendDataWithPost(user);
    
    // Show success message
    alert('User registered successfully! Check the console for AJAX logs.');
});

// Function to send data using AJAX POST
function sendDataWithPost(user) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/api/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('User registered successfully (POST):', xhr.responseText);
        }
    };
    xhr.send(JSON.stringify(user));
}

// Add event listener for the "View Registered Users" button
document.getElementById('viewListButton').addEventListener('click', function() {
    window.location.href = 'list.html';
});
