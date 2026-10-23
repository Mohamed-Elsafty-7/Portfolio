const form = document.getElementById('questForm');

if (form) {
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    });

    if (emailInput) {
        emailInput.addEventListener('input', function () {
            if (this.validity.typeMismatch) {
                this.setCustomValidity('Please enter a valid email address (example: name@domain.com)');
            } else {
                this.setCustomValidity('');
            }
        });
    }
}
