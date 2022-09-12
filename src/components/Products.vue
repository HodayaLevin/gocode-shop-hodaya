<script lang="ts">
import { defineComponent } from 'vue';
import Product from './product.vue';

    export default defineComponent({
    components: { Product }
})
</script>
<template>
    <Product/>
    <Product/>
    <Product/>    
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