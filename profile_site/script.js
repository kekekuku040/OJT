document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    fetch('https://script.google.com/macros/s/AKfycby7kYIHPY_Fo7jaDtZCsawv-9NH4CtlXJ4d32NS6D0HrAW7CUJ3BsErhBqkfe4ihzJK/exec', {
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
