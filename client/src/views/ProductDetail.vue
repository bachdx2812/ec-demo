<template>
  <div>
    Product detail {{ $route.params.id }}
    {{ product }}

    <br />

    count {{ $store.state.cartNumber }}

    <br />
    quantity: <input v-model.number="quantity" type="number" />

    <button @click="addToCart()">add to cart</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
      quantity: 1,
    };
  },

  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        id: this.product.id,
        quantity: this.quantity,
      });
    },
  },

  async mounted() {
    console.log(this.$store.state);

    const axios = require("axios").default;
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("accessToken")}`;

    const self = this;

    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then(function (response) {
        // handle success
        self.product = response.data;
      })
      .catch(function (error) {
        if (error.response.status == 403) {
          self.$router.push("/login");
        }
      });

    console.log("4");
  },
};
</script>
