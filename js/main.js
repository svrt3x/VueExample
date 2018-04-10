new Vue({
    el: '#app',
    data: {
        title: "Hello Vue.js",
        styleCSS: ''
    },
    methods: {
        changeText(){
            this.title = 'someText'
        }
    }
});
