const app = new Vue({
    el:'#app',
    data: {
        mensaje: "Hola",
        contador: 0,
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return{
                'bg-danger':this.contador <30,
                'bg-warning':this.contador >=30 && this.contador <60,
                'bg-success':this.contador >=60,
            }
        }
    }
})