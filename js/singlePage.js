import { AlsoLike } from "./alsoLike.js";
//import { Cart } from "./cart.js";

const app = Vue.createApp({
    components: {
        'also_like': AlsoLike, //не забыть в html дописать 
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