const cartModule = {
  namespaced: true,
  // state inside of a module is treated as a local state inside of a module, e.g., if you log state you won't find `authStatus` that's in the global store below
  // you can access global mutations, actions and getters however
  // if you need access to the global state you can access via the context object and also through the `rootState` argument in getter functions
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      const productInCartIndex = state.cart.items.findIndex(
        (ci) => ci.productId === payload.id
      );
      if (productInCartIndex >= 0) {
        state.cart.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: payload.id,
          title: payload.title,
          image: payload.image,
          price: payload.price,
          qty: 1,
        };
        state.cart.items.push(newItem);
      }
      state.cart.qty++;
      state.cart.total += payload.price;
    },
    removeProductFromCart(state, payload) {
      const productInCartIndex = state.cart.items.findIndex(
        (cartItem) => cartItem.productId === payload.prodId
      );
      const prodData = state.cart.items[productInCartIndex];
      state.cart.items.splice(productInCartIndex, 1);
      state.cart.qty -= prodData.qty;
      state.cart.total -= prodData.price * prodData.qty;
    },
  },
  actions: {
    addProductToCart(context, payload) {
      console.log(context);
      const products = context.rootGetters["getProducts"];
      context.dispatch("changeAuthStatus", null, { root: true });
      // dispatch takes 3 args: action type, payload, options
      // option must be provided if you want to dispatch action in another module/root store
      console.log(products);
      context.commit("addProductToCart", payload);
    },
    removeProductFromCart(context, payload) {
      context.commit("removeProductFromCart", payload);
    },
  },
  getters: {
    getCartData({ cart }) {
      return cart;
    },
  },
};

export default cartModule;
