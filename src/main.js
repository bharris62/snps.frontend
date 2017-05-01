import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'bulma/css/bulma.css';
import Users from './components/Users.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/users', component: Users },
    { path: '/', component: Home }
];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

new Vue({
  el: '#app',
   router,
  render: h => h(App)
})
