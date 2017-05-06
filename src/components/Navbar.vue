<template>
    <nav class="nav has-shadow">
        <div class="container">
            <div class="nav-left">
                <a class="nav-item">
                    <img src="https://s7.postimg.org/9lhforqbf/logo.png" style="height: 100px; width: 100px; "
                         alt="Bulma logo">
                </a>
                <a class="nav-item is-tab is-hidden-mobile is-active">Create</a>
                <a class="nav-item is-tab is-hidden-mobile">Features</a>
                <a class="nav-item is-tab is-hidden-mobile">Pricing</a>
                <a class="nav-item is-tab is-hidden-mobile">About</a>
            </div>
            <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
            <div class="nav-right nav-menu">
                <a class="nav-item is-tab is-hidden-tablet is-active">Home</a>
                <a class="nav-item is-tab is-hidden-tablet">Features</a>
                <a class="nav-item is-tab is-hidden-tablet">Pricing</a>
                <a class="nav-item is-tab is-hidden-tablet">About</a>
                <a class="nav-item is-tab">
                    <figure class="image is-16x16" style="margin-right: 8px;">
                        <img src="http://bulma.io/images/jgthms.png">
                    </figure>
                    Profile
                  </a>
                <a @click="logout()" class="nav-item is-tab">Log out</a>
            </div>
        </div>
    </nav>
</template>

<script>
    import axios from 'axios';
    import config from '../config';
    export default {
        data() {
            return {
                isLoggedIn: false
            }
        },
        methods: {
            logout() {
                console.log("Hello!");
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                window.location = '/';
            }
        },
        created() {
            var Bearerconfig = {
                headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
            };
            console.log("bearerconfig: " + Bearerconfig)
            if(Bearerconfig.headers.Authorization != "Bearer null") {

                console.log(Bearerconfig)
                axios.get(config.apiHost + `/users/current`, Bearerconfig)
                    .then(response => {
                        let data = response.data;
                        localStorage.setItem("username", data.username);
                    })
                    .catch(e => {


                    })
            }
        }
    }
</script>

<style scoped>

</style>