<template>
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item bg-success active">Frutas</li>
  <li v-for="(item, index) of frutas.sort((a, b) => b.cantidad - a.cantidad)" :key="item.id" @click="aumentar(index)" class="list-group-item d-flex justify-content-between list-group-item-action align-items-start">
    {{item.nombre}}
    <span class="badge bg-success rounded-pill">{{item.cantidad}}</span>
  </li>
    </ul>
    <br>
    <button @click="reiniciar()" class="btn btn-danger">Reiniciar</button>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";

export default {
  name: "MyLista",
  computed: {
    ...mapState(["frutas"]),
  },
  methods: {
    ...mapMutations(["aumentar","reiniciar"])
  },
};
</script>

<style scoped>

</style>