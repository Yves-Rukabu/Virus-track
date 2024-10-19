document.addEventListener('DOMContentLoaded', () => {
    const bluetoothToggle = document.getElementById('bluetoothToggle');
    let isBluetoothOn = false;

    bluetoothToggle.addEventListener('click', () => {
        isBluetoothOn = !isBluetoothOn;
        bluetoothToggle.textContent = isBluetoothOn ? 'Turn Off Bluetooth' : 'Turn On Bluetooth';
        bluetoothToggle.classList.toggle('btn-info', !isBluetoothOn);
        bluetoothToggle.classList.toggle('btn-danger', isBluetoothOn);

        alert(isBluetoothOn ? 'Bluetooth is now on for contact tracing.' : 'Bluetooth is now off.');
    });

    // Handle Registration Form Submission
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Registration successful! Redirecting to the dashboard...');
        window.location.href = 'dashboard.html';
    });
});
