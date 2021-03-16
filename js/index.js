const browseAllProducts = document.querySelector('.browseAllProducts');
browseAllProducts.addEventListener('click', () => {window.location = "./catalog.html"});

import { FeaturedProducts } from "./featuredProducts.js";
import { Cart } from "./cart.js";

const app = Vue.createApp({
    components: {
        'featured_products': FeaturedProducts, //не забыть в html дописать 
        Cart,
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
});

app.mount('#app');