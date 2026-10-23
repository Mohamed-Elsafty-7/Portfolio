// The hero character enters automatically via the .steve CSS animation.
// No hover or mouse interaction is required.
document.addEventListener("DOMContentLoaded", () => {
    const heroCharacter = document.getElementById("hero-img");
    if (heroCharacter) {
        heroCharacter.classList.add("is-visible");
    }
});
