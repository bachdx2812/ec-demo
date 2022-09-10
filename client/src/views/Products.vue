<template>
  <div>
    <ProductsList :products="products" />
  </div>
</template>

<script>
import ProductsList from "@/components/ProductsList";

export default {
  components: {
    ProductsList,
  },

  mounted() {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => (this.products = data));
  },

  data() {
    return {
      products: [],
    };
  },
};
</script>
