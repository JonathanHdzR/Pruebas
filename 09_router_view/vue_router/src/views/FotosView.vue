<template>
  <div>
    <h1>Galería de fotos</h1>
    <router-link
      :to="{ name: 'fotos', params: { id: item } }"
      v-for="(item, index) of fotosArreglo"
      :key="index"
    >
      <button>Foto {{ item }}</button>
    </router-link>

    <CompFotosView></CompFotosView>
    <div class="row">
        <div class="col-sm">
          <button @click="anterior" class="btn btn-primary">Anterior</button>
        </div>
      <div class="col-sm">
        <button @click="home" class="btn btn-success">Home</button>
      </div>
      <div class="col-sm">
        <button @click="siguiente" class="btn btn-primary">Siguiente</button>
      </div>
    </div>

    <br />
  </div>
</template>

<script>
import CompFotosView from "@/components/CompFotosView.vue";

export default {
  components: {
    CompFotosView,
  },
  data() {
    return {
      fotosArreglo: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    anterior() {
      this.$router.go(-1);
    },
    siguiente() {
      this.$router.go(1);
    },
  },
};
</script>
