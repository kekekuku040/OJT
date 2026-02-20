document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('formAlert').classList.remove('d-none');
    document.getElementById('contactForm').reset();
});
