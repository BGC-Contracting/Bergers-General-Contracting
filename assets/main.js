document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = 'Thank you! Your request has been received.';
    this.reset();
});
