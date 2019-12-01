import Vue from 'vue';
import VueRouter from 'vue-router';

// app specific
import router from './router/index';
import app from "@/App.vue";

Vue.use(VueRouter);

console.log('hi');

// bootstrap the app
new Vue({
    el: '#app',
    router,
    template: '<app/>',
    components: { app }
})

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
