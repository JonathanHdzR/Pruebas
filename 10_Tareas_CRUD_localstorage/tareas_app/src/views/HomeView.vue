<template>

  <div class="home">
    <br>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <img
      alt="logo"
      class="img-responsive"
      width="100"
      src="../assets/task.png"
    />
    <TaskApp></TaskApp>
    <form>
      <div class="container">
        <input v-model="nuevaTarea" type="text" class="form-control" />
        <br />
        <button
          @click="agregarTarea"
          v-on:keyup.enter="agregarTarea"
          class="btn btn-primary"
        >
          Agregar
        </button>
        <div class="mt-3" v-for="(item, index) of tareas" :key="item">
          <div
            :class="['alert', item.estado ? 'alert-success' : 'alert-danger']"
            role="alert"
          >
            <div class="d-flex justify-content-between align-items-center">
              <div>#{{ index + 1 }} : {{ item.nombre }} </div>
              <div>
                {{item.estado}}
              </div>
              <div>
                <button
                  @click="estatusTarea(index)"
                  class="btn btn-success btn-sm"
                >
                  ✔
                </button>
                <button @click="eliminar(index)" class="btn btn-danger btn-sm">
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TaskApp from "@/components/TaskApp.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    TaskApp,
  },

  data: function () {
    return {
      tareas: [],
      nuevaTarea: "",
    };
  },
  methods: {
    agregarTarea(event) {
      if (event) event.preventDefault();
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false,
      });
      console.log(this.tareas);
      this.nuevaTarea = "";
      this.enviarLocalStorage();
    },
    estatusTarea(index) {
      if (event) event.preventDefault();
      this.tareas[index].estado = true;
      this.enviarLocalStorage();
    },
    eliminar(index) {
      this.tareas.splice(index, 1);
      this.enviarLocalStorage();
    },

    //Función para ENVIAR los datos al local storage
    enviarLocalStorage() {
      localStorage.setItem("taskApp", JSON.stringify(this.tareas));
    },
  },

  //Función para GUARDAR los datos en local storage
  created: function () {
    let datosDB = JSON.parse(localStorage.getItem("taskApp"));
    if (datosDB === null) {
      this.tareas = [];
    } else {
      this.tareas = datosDB;
    }
  },
};
</script>
