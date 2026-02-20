document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    fetch('https://script.google.com/macros/s/AKfycbzoKYAGSLQVHU1BLNJRQPWizWV5Pqp5apmzgv0bhD4NVBNDM3uH23ad7kGrLBvVvGtv/exec', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === "success") {
            document.getElementById('formAlert').classList.remove('d-none');
            document.getElementById('contactForm').reset();
        } else {
            alert("Something went wrong.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Failed to send message.");
    });
});
