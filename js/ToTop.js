const scrollBtn = document.getElementById("scrollToTop");

if (scrollBtn) {
    const updateScrollButton = () => {
        scrollBtn.classList.toggle("show", window.scrollY > 400);
    };

    window.addEventListener("scroll", updateScrollButton, { passive: true });
    updateScrollButton();

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
        });
    });
}
