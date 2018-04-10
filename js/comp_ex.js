Vue.component ('app-car', {
    data: function () {
        return {
            cars: [
                {model: "BMW"},
                {model: "Volvo"},
                {model: "Mercedes"},
                {model: "Ford"},
                {model: "Audi"},
                {model: "Siat"},
                {model: "Fiat"},
            ]
        }
    },
    template: '<div><div class="car" v-for="car in cars"><p>{{ car.model }}</p></div></div>'
});

new Vue({
   el: '#app',
   data: {

   }
});

new Vue({
    el: '#app2'
});
