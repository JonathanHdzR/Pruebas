<template>
  <tr>
    <th scope="row">{{ producto.id }}</th>
    <td>{{ producto.title }}</td>
    <td>{{ producto.cantidad }}</td>
    <td>
      <button class="btn btn-danger btn-sm" @click="disminuir(producto)">
        &nbsp;-&nbsp;</button
      >&nbsp;

      <button class="btn btn-success btn-sm" @click="agregar(producto)">
        +
      </button>
    </td>
    <td>${{ producto.price * producto.cantidad }}</td>
  </tr>
</template>

<script>
import { useStore } from "vuex";

export default {
  props: ["producto"],
  setup() {
    const store = useStore();
    const agregar = (producto) => store.dispatch("agregarCarrito", producto);
    const disminuir = (producto) => store.dispatch("disminuir", producto);

    return { agregar, disminuir };
  },
};
</script>
