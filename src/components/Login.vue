<template>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Login - Free Bulma template</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <link rel="stylesheet" id="bulma" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.2/css/bulma.min.css" />
        <link rel="stylesheet" type="text/css" href="../css/login.css">
    </head>
    <body>
    <div class="login-wrapper columns">
        <div class="column is-8 is-hidden-mobile hero-banner">
            <section class="hero is-fullheight is-dark">
                <div class="hero-footer">
                </div>
            </section>
        </div>
        <div class="column is-4">
            <section class="hero is-fullheight">
                <div class="hero-heading">
                    <div class="section has-text-centered">
                        <img src="https://s7.postimg.org/9lhforqbf/logo.png" alt="Bulma logo" width="150px">
                    </div>
                </div>
                <div class="hero-body">
                    <div class="container">
                        <div class="columns">
                            <div class="column is-8 is-offset-2">
                                <h1 class="avatar has-text-centered section">
                                    <img src="https://placehold.it/128x128">
                                </h1>
                                <div class="login-form">
                                    <p class="control has-icon has-icon-right">
                                        <input class="input email-input" v-model="email" type="text" placeholder="jsmith@example.org">
                                        <span class="icon user">
                                          <i class="fa fa-user"></i>
                                        </span>
                                    </p>
                                    <p class="control has-icon has-icon-right">
                                        <input class="input password-input" v-model="password" type="password" placeholder="●●●●●●●">
                                        <span class="icon user">
                                          <i class="fa fa-lock"></i>
                                        </span>
                                    </p>
                                    <p class="control login">
                                        <button @click="login()" class="button is-success is-outlined is-large is-fullwidth">Login</button>
                                    </p>
                                </div>
                                <div class="section forgot-password">
                                    <p class="has-text-centered">
                                        <a href="#">Forgot password</a>
                                        <a href="#">Need help?</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    </body>
    </html>
</template>
<script>
    import axios from 'axios';
    import config from '../config';

    export default {
        data() {
            return {
                email: '',
                password: ''
            }

        },
        methods: {
            login: function() {
                axios.post(config.apiHost + '/login', {
                    username: this.email,
                    password: this.password
                })
                    .then((response) => {
                        localStorage.setItem("token", response.data.token);
                        this.email = "";
                        this.password = "";
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>
<style scoped>
    .bg {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: url('https://s9.postimg.org/70erwedjj/fractal.jpg');
    }

    body{
        overflow: hidden;
    }
</style>