import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [],
    carrito: {}
  },
  getters: {
    totalCantidad(state) {
      return {
        cantidad: Object.values(state.carrito).reduce((acc, { cantidad }) => acc + cantidad, 0),
        precio: Object.values(state.carrito).reduce((acc, { cantidad, price }) => acc + cantidad * price, 0)
      }
    }
  },
  mutations: {
    setProducto(state, payload) {
      state.productos = payload
      console.log(state.productos)
    },
    setAgregarProductos(state, payload) {
      state.carrito[payload.id] = payload;
    },
    vaciarCarrito(state) {
      state.carrito = {};
    }
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const res = await fetch('api.json')
        const data = await res.json();
        commit('setProducto', data)
      }
      catch (error) {
        console.log(error)
      }
    },
    agregarCarrito({ commit, state }, producto) {
      if (state.carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = state.carrito[producto.id].cantidad + 1;
      } else {
        producto.cantidad = 1;
      }
      commit('setAgregarProductos', producto)
    },
    disminuir({ commit, state }, producto) {
      producto.cantidad = state.carrito[producto.id].cantidad - 1
      commit('disminuir', producto)
      if (producto.cantidad == 0) {
        delete state.carrito[producto.id]
        return
      }
    }
  },
  modules: {
  }
})
