document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.links a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('shadow-lg');
        });
        link.addEventListener('mouseout', () => {
            link.classList.remove('shadow-lg');
        });
    });

    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});
