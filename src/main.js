import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'bulma/css/bulma.css';
import Snippet from './components/Snippet.vue'
import Home from './components/Home.vue'
import CodeMirror from 'vue-codemirror'
import SnippetView from './components/SnippetView.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

Vue.use(CodeMirror);
Vue.use(VueRouter);

const routes = [
    { path: '/snip/:id', component: SnippetView },
    { path: '/', component: Home },
    { path: '/create', component: Snippet},
    {path: '/login', component: Login},
    {path: '/register', component: Register}
];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
