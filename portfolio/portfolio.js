document.addEventListener("DOMContentLoaded", function() {
    const anoSpan = document.getElementById("ano");
    if (anoSpan) {
        anoSpan.textContent = new Date().getFullYear();
    }
});