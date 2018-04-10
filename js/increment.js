new Vue({
    el: '#app',
    data: {
        value: 1,
    },
    methods: {
        multiply(value){
            this.value = value
        }
    },
    computed: {
        doubleValue(){
            return this.value * 2
        }
    }
});