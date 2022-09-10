<template>
  <div>
    email: <input type="text" v-model="email" />
    <br />

    <br />

    password: <input type="password" v-model="password" />

    <br />

    <button class="btn btn-primary" @click="submit">button</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {},

  methods: {
    submit() {
      const axios = require("axios").default;

      const self = this;
      axios
        .post("http://localhost:3000/sign_in", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("accessToken", response.data.token);

          self.$router.push("/products");
        });
    },
  },
};
</script>
