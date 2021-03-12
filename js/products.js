import {ProductItem} from "./productItem.js";

export const Products = {
    //inject: ['API', 'getJson'],
    inject: ['getJson'],
    components: {
        ProductItem
    },
    data() {
        return {
            products: [],
            featuredProducts: [],
            alsoLikeProducts: [],
        }
    },
    // computed: {
    //     filtered() {
    //         return this.products.filter(el => new RegExp(this.userSearch, 'i').test(el.product_name));
    //     }
    // },
    mounted() {
        this.getJson(`myCatalog.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            })
            .then(() => {
                this.products.forEach(el => {
                    if (el.featured) {
                        this.featuredProducts.push(el);
                    }
                    if (el.also_like) {
                        this.alsoLikeProducts.push(el);
                    }
                });
            });
    },
    /*methods: {
        getFeaturedProducts(productsArray) {
            productsArray.forEach(el => {
                if (el.featured) {
                    this.featuredProducts.push(el);
                }
            });
        },
    },*/
    template: `
        <div class="products">
                <ProductItem 
                v-for="el of featuredProducts" 
                :key="el.id_product"
                :product="el"
                >
                </ProductItem>
            </div>
    `
};