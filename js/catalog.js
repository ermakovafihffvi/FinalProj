﻿import { Products } from "./products.js";
//import { Cart } from "./cart.js";

const app = Vue.createApp({
    components: {
        Products,//не забыть в html дописать 
        //Cart,
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