<script setup lang="ts">
import { useProductCart } from "@/stores/useProductCart";
import type IProduct from "@/types/Product";

const productStore = useProductCart();

</script>
<template>
    <div>
        <template v-for="item in productStore.productCart">
            <div>{{item.product.title}} - {{item.product.price}} --> {{item.count}}</div>
            <img :src="item.product.image" class="image" />
        </template>
    </div>
</template>
<style scoped>
.image {
    width: 40px;
    height: 40px;
}
</style>
    