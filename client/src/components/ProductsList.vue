<template>
  <div>
    <div
      class="card"
      style="width: 18rem"
      v-for="product in products"
      :key="product.id"
    >
      <img :src="product.image_url" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <router-link :to="`/products/${product.id}`">
          Product detail
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      null: false,
      default: () => [],
    },
  },
};
</script>

<style></style>
