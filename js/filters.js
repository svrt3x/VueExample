Vue.filter ('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.replace(/\b\w/g, function (l) {
        return l.toUpperCase()
    })
});

new Vue({
    el: '#app',
    data: {
        show: true,
        message: 'Hello world, hello',
        cars: [
            {model: "BMW", speed: 205.8},
            {model: "Audi", speed: 240.21},
            {model: "AMG", speed: 350.4},
            {model: "Ford", speed: 160.5},
        ]
        },
    computed: {
        showMess(){
            return this.message.toUpperCase();
        }
    },
    filters: {
        lowercase(value){
            return value.toLowerCase()
        }
    }
    });