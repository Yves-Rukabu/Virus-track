document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const userName = document.getElementById('name').value;
    localStorage.setItem('userName', userName); // Store username in localStorage
    alert('Registration successful! You can now log in.');
    window.location.href = 'dashboard.html'; // Redirect to User Dashboard
});

// Load user name on the dashboard
document.addEventListener('DOMContentLoaded', function() {
    const userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('user-name').innerText = userName;
    }
});

// Bluetooth toggle functionality
document.getElementById('bluetooth-toggle').addEventListener('change', function() {
    const status = this.checked ? 'ON' : 'OFF';
    document.getElementById('bluetooth-status').innerText = `Bluetooth is ${status}`;
});

// Reporting symptoms
document.getElementById('report-symptoms').addEventListener('click', function() {
    window.location.href = 'symptoms.html'; // Redirect to symptoms page
});

// Symptoms form submission
document.getElementById('symptoms-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const symptoms = document.getElementById('symptoms').value;
    alert("Thank you! Your symptoms have been reported.");
    // Here you would normally send the symptoms to the backend for processing.
    window.location.href = 'dashboard.html'; // Redirect to User Dashboard
});

// Profile form submission
document.getElementById('profile-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const updatedName = document.getElementById('name').value;
    const updatedContact = document.getElementById('contact').value;
    const updatedEmail = document.getElementById('email').value;
    localStorage.setItem('userName', updatedName); // Update username in localStorage
    alert("Profile updated successfully!");
    window.location.href = 'dashboard.html'; // Redirect to User Dashboard
});

// Logout functionality
document.getElementById('logout')?.addEventListener('click', function() {
    localStorage.removeItem('userName'); // Clear stored username
    window.location.href = 'index.html'; // Redirect to landing page
});
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const district = document.getElementById('district').value;
    const province = document.getElementById('province').value;
    const sector = document.getElementById('sector').value;
    const cell = document.getElementById('cell').value;
    const village = document.getElementById('village').value;
    const phone = document.getElementById('phone').value;
    
    // Simulate successful registration
    alert(`Registration successful! Welcome, ${fullName}! Your details are:\nEmail: ${email}\nAddress: ${address}\nDistrict: ${district}\nProvince: ${province}\nSector: ${sector}\nCell: ${cell}\nVillage: ${village}\nPhone: ${phone}`);
    
    // Redirect to dashboard after registration
    window.location.href = 'dashboard.html';
});
