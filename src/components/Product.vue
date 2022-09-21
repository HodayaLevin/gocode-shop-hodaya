<script setup lang="ts">
import { reactive, ref } from 'vue';
import type IProduct from '@/types/Product';
import type { PropType } from 'vue'
import { useProductCart } from '@/stores/useProductCart';

const productCartStore = useProductCart();

const props = defineProps({
    productItem: {
        type: Object as PropType<IProduct>,
        required: true
    },

})
function isInCart() {
    return productCartStore.productCart.filter(p => p.product.id == props.productItem.id).length;
}




</script>
<template>
    <button @click="productCartStore.remove(productItem)">-</button>
    <div class="product-card">
        <div class="product-image">
            <img :src="props.productItem?.image" />
        </div>
        <div v-if="isInCart()"> add to cart</div>
        <div class="product-info">
            <h5>{{productItem?.title}}</h5>
            <h6>{{productItem?.price}}</h6>
        </div>
    </div>
    <button @click="productCartStore.add(productItem)">+</button>



</template>
<style scoped>
@media (max-width: 920px) {
    .product-card {
        flex: 1 21%;
    }
}

@media (max-width: 600px) {
    .product-card {
        flex: 1 46%;
    }
}

.product-card {
    display: flex;
    flex-direction: column;

    padding: 2%;
    flex: 1 16%;

    background-color: #fff;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.25);
}

.product-image img {
    width: 100%;
}

.product-info {
    margin-top: auto;
    padding-top: 20px;
    text-align: center;
}
</style>