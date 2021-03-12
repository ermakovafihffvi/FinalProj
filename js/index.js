const browseAllProducts = document.querySelector('.browseAllProducts');
browseAllProducts.addEventListener('click', () => {window.location = "./product.html"});

//import {Cart} from "./Cart.js";
import { Products } from "./products.js";

const app = Vue.createApp({
    components: {
        //Cart,
        Products
    },
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
        getJson(url){
            return fetch(url)
                  .then(result => result.json())
        }
    },
});

app.mount('#app');