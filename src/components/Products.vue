<script setup lang="ts">
import Product from "./Product.vue";

const props = defineProps(["productsList"])

</script>
<template>
    <section class="products">
        <template v-for="item in productsList" :key="item.id">
            <Product :product-item="item" />
        </template>
    </section>
</template>
<style scoped>
.products {
    display: flex;
    flex-wrap: wrap;
}

@media (max-width: 920px) {

    .products .product-card:first-child,
    .products .product-card:nth-child(2) {
        flex: 2 46%;
    }
}
</style>
