export const ProductItem = {
    props: ['product'],
    template: `
    <div class="product-item">

    <div class="image">
        <img :src="product.img" alt=product.product_name />
        <div class="hover_image">
            <div class="hover_box">
                <a href="#"><img src="img/cart_hover.svg" alt=""><span>Add to Cart</span></a>
            </div>
        </div>
    </div>

    <div class="product-item-text">{{product.product_name}}<br /><span>&#36{{product.price}}</span></div>
    </div>
    
    `
};