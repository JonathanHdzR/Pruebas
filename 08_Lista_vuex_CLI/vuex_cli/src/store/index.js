import { createStore } from 'vuex'

export default createStore({
  state: {
    frutas:[
      {nombre: 'manzana', cantidad: 0},
      {nombre: 'mango', cantidad: 0},
      {nombre: 'plátano', cantidad: 0},
      {nombre: 'fresa', cantidad: 0},
      {nombre: 'durazno', cantidad: 0},
      {nombre: 'sandia', cantidad: 0},
    ]
  },
  getters: {
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad++
    },
    reiniciar(state){
      state.frutas.forEach(elemento=>{
        elemento.cantidad= 0;
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
