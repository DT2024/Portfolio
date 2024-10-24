document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.book-page');
    let currentIndex = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            if (i === index || i === index + 1) {
                page.classList.add('show');
                page.classList.remove('hide');
            } else if (i < index) {
                page.classList.add('hide');
                page.classList.remove('show');
            } else {
                page.classList.remove('show', 'hide');
            }
        });
    }

    showPage(currentIndex);

    // Page navigation using the turn icon
    document.querySelector('.turn-icon').addEventListener('click', () => {
        currentIndex = (currentIndex + 2) % pages.length; // Move by two pages
        showPage(currentIndex);
    });
});
