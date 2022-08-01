Vue.component('saludo',{
    template: `
    <div>
        <h1>{{saludo}}</h1>
        <h3>1234567890</h3>
    </div`,
    data(){
        return{
            saludo: 'Hola desde vue'
        }
    }
});