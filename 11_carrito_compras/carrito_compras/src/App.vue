<template>
  <HeaderApp></HeaderApp>
  <div class="container text-center">
    <h1>Shop</h1>
    <div
      class="offcanvas offcanvas-start"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabindex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">ShopStore</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <Carrito></Carrito>
      </div>
    </div>
    <hr />
    <div class="row">
      <Card
        v-for="producto of productos"
        :key="producto.id"
        :producto="producto"
      ></Card>
    </div>
  </div>
  <FooterApp></FooterApp>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import Card from "./components/Card.vue";
import FooterApp from "./components/FooterApp.vue";
import HeaderApp from "./components/HeaderApp.vue";
import Carrito from "./components/Carrito.vue";

export default {
  name: "App",
  components: {
    Card,
    FooterApp,
    HeaderApp,
    Carrito,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("fetchData");
    });
    const productos = computed(() => store.state.productos);
    const carrito = computed(() => store.state.carrito);
    return { productos };
  },
};
</script>

<style></style>
