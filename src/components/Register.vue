<template>
    <div>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Register</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    </head>
    <section class="hero is-fullheight is-dark is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column is-4 is-offset-4">
                        <h1 class="title">
                            Register an Account
                          </h1>
                        <div class="box">
                            <label class="label">UserName</label>
                            <p class="control">
                                <input class="input" v-model="userName"type="text" placeholder="snipMaster">
                            </p>
                            <label class="label">Email</label>
                            <p class="control">
                                <input class="input" v-model="email"type="text" placeholder="snipMaster@example.org">
                            </p>
                            <hr>
                            <label class="label">Password</label>
                            <p class="control">
                                <input class="input" v-model="password" type="password" placeholder="●●●●●●●">
                            </p>
                            <label class="label">Confirm Password</label>
                            <p class="control">
                                <input class="input" v-model="confirmPassword" type="password" placeholder="●●●●●●●">
                            </p>
                            <hr>
                            <p class="control">
                                <button @click="register()" class="button is-primary">Register</button>
                                <button class="button is-default">Cancel</button>
                            </p>
                        </div>
                        <p class="has-text-centered">
                            <a href="#">Login</a>
                            |
                            <a href="#">Need help?</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>
<script>
    import axios from 'axios';
    import config from '../config';
    export default {
        data(){
            return {
                email: '',
                userName: '',
                password: '',
                confirmPassword: ''
            }
        },
        methods: {
            register: function() {
                axios.post(config.apiHost + '/register', {
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword,
                    username: this.userName
                })
                    .then((response) => {
                        let data = response.data;
                        localStorage.setItem(data.token);

                        this.email = "";
                        this.password = "";
                        this.confirmPassword = "";
                        this.name = "";
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
         }
        }
    }
</script>
