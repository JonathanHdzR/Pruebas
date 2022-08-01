<template>
  <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3">
    <div class="d-flex card align-items-center text-center">
      <img
        :src="producto.image"
        class="card-img-top"
        :alt="`imagen-${producto.tittle}`"
      />
      <div class="card-body">
        <h5 class="card-tittle">{{ producto.title }}</h5>
        <p class="card-text">$ {{ producto.price }}<span></span></p>
        <button @click="agregar(producto)" class="btn btn-dark">Agregar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: ["producto"],
  setup() {
    const store = useStore();
    const agregar = (producto) => {
      store.dispatch("agregarCarrito", producto);
    };
    return { agregar };
  },
};
</script>
{{}}
<style>
img {
  width: 200px; /* You can set the dimensions to whatever you want */
  height: 200px;
  object-fit: contain;
  /* 
fill - stretch the image.
contain - preserve the aspect ratio of the image.
cover - Fill the height and width of the box.
none - Keep the original size.
scale-down - compare the differences between none and contain to find the smallest object size. 
*/
}
</style>
