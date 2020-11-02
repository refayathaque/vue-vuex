<template>
  <the-header></the-header>
  <router-view v-if="getAuthStatus.shopLoggedIn"></router-view>
</template>

<script>
import { mapGetters } from "vuex";
import TheHeader from './TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  provide() {
    return {
      cart: this.cart,
      addProductToCart: this.addProductToCart,
      removeProductFromCart: this.removeProductFromCart,
    };
  },
  computed: {
    ...mapGetters(["getAuthStatus"]),
  },
  methods: {
    addProductToCart(productData) {
      const productInCartIndex = this.cart.items.findIndex(
        (ci) => ci.productId === productData.id
      );
      if (productInCartIndex >= 0) {
        this.cart.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        this.cart.items.push(newItem);
      }
      this.cart.qty++;
      this.cart.total += productData.price;
    },
    removeProductFromCart(prodId) {
      const productInCartIndex = this.cart.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const prodData = this.cart.items[productInCartIndex];
      this.cart.items.splice(productInCartIndex, 1);
      this.cart.qty -= prodData.qty;
      this.cart.total -= prodData.price * prodData.qty;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
</style>