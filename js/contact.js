const form = document.getElementById('questForm');
    const successModalHTML = `
        <div class="modal fade" id="successModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-dark border border-info">
                    <div class="modal-body text-center p-5">
                        <div class="mb-4">
                            <i class="bi bi-check-circle-fill" style="font-size: 4rem; color: #00ff9d;"></i>
                        </div>
                        <h3 class="text-white mb-3">QUEST DISPATCHED SUCCESSFULLY!</h3>
                        <p class="text-light-emphasis mb-4">
                            Your message has been received. <br>
                            I'll get back to you within <strong>1-2 business biomes</strong>.
                        </p>
                        <button type="button" class="btn btn-outline-info px-5" data-bs-dismiss="modal">
                            RETURN TO BASE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', successModalHTML);

    const successModal = new bootstrap.Modal(document.getElementById('successModal'));

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            successModal.show();

            document.getElementById('successModal').addEventListener('hidden.bs.modal', function () {
                form.reset();
                form.classList.remove('was-validated');
            }, { once: true });
        }

        form.classList.add('was-validated');
    });

    document.getElementById('email').addEventListener('input', function() {
        if (this.validity.typeMismatch) {
            this.setCustomValidity("Please enter a valid email address (example: name@domain.com)");
        } else {
            this.setCustomValidity("");
        }
    });