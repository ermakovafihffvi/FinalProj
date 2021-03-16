//const tosinglePage = document.querySelectorAll('.product-item');
//tosinglePage.forEach(a => {
//    a.addEventListener('click', () => {window.location = "./SinglePage.html"});
//});

export const main = {
    data() {
        return {
        }
    },
    provide() {
        return {
            getJson: this.getJson
        }
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
        }
    },
};
