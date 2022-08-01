const app = new Vue({
  el: "#app",
  data: {
    saludo: "Soy ciclo de vida de Vue",
  },
  beforeCreate() {
    // Al crear los métodos, observadores y eventos, pero aun no accede al DOM
    console.log("beforeCreate");
  },
  beforeMount() {
    // Se ejecuta antes de insertar el DOM
    console.log("beforeMount");
  },
  mounted() {
      // Se ejecuta al insertar el DOM
      console.log("mounted");
  },
  beforeUpdate(){
     // Al detectar un cambio
     console.log('beforeUpdate');
  },
  updated(){
    // Al realizar los cambios
    console.log('updated');
  },
  beforeDestroy(){
     // Antes de destruir la instancia
    console.log('beforeDestroy');
  },
  destroyed(){
     // Se destruye toda la instancia :(
        console.log('destroyed');
    }
})
