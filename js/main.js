const tosinglePage = document.querySelectorAll('.product-item');
tosinglePage.forEach(a => {
    a.addEventListener('click', () => {window.location = "./SinglePage.html"});
});