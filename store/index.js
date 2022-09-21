import Vuex from 'vuex'
import products from "assets/products";

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      products: [],
    }),

    mutations: {
      seProducts(state, payload) {
        state.products = payload
      },
    },

    actions: {
      productsRetrieve(context) {
        context.commit('seProducts', products)
        return true
      },
    },

    getters: {
      getProducts(state) {
        return state.products
      },
    },
  })
}
export default createStore

