document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');

            // Cambia el ícono ☰ a ❌
            if (menu.classList.contains('active')) {
                menuToggle.textContent = '✖';
            } else {
                menuToggle.textContent = '☰';
            }
        });
    }
});
