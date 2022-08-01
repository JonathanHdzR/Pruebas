<template>
  <div class="my-5">
    <h4>Carrito de compras</h4>
    <table class="table">
      <thead>
        <tr row="5">
          <th scope="col">#</th>
          <th scope="col">Producto</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Acción</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody id="productos">
        <Item
          v-for="producto in productos"
          :key="producto.id"
          :producto="producto"
        />
      </tbody>

      <tfoot v-if="Object.keys(carrito).length > 0">
        <tr>
          <th colspan="3">Cantidad: {{ totalCantidad.cantidad }}</th>
          <th>
            <button
              class="btn btn-danger btn-sm"
              @click="vaciarCarrito"
              id="vaciarCarrito"
            >
              Limpiar carrito
            </button>
          </th>
          <th>
            $ <span>{{ totalCantidad.precio }}</span>
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
  <p class="text-bg-info" v-if="Object.keys(carrito).length === 0">
    Carrito vacio. ¡Empieza a comprar hoy!
  </p>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Item from "./Item.vue";
export default {
  components: { Item },
  setup() {
    const store = useStore();
    const carrito = computed(() => store.state.carrito);
    const productos = computed(() => store.state.carrito);
    const totalCantidad = computed(() => store.getters.totalCantidad);
    const vaciarCarrito = () => {
      store.commit("vaciarCarrito");
    };
    return {
      productos,
      totalCantidad,
      vaciarCarrito,
      carrito,
    };

    // return { productos, totalCantidad };
  },
};
</script>
