<template>
    <div>
        <div v-if="submitted" class="notification is-success">
            <button @click="uncheck()"class="delete"></button>
            You successfully loaded a snippet!
          </div>
        <div class="columns">
        <div class="column is-two-thirds box">
            <div class="codemirror">
                <!-- codemirror -->
                <codemirror v-model="code" :options="editorOption"></codemirror>
            </div>
        </div>
        <div class="column">
        <div class="is-one-third">
            <div class="field">
                <label class="label">Title</label>
                <p class="control">
                    <input class="input" v-model="title" type="" placeholder="Title Your Snippet">
                </p>
            </div>
            <div class="field">
                <label class="label">Language</label>
                <p class="control">
            <span class="select">
              <select v-model="language">
                    <option>Select dropdown</option>
                    <option>Java</option>
                    <option>Python</option>
                    <option>C++</option>
                    <option>Scala</option>
                    <option>HTML</option>

              </select>
            </span>
                </p>
            </div>

            <div class="field">
                <label class="label">Description</label>
                <p class="control">
                    <textarea class="textarea" v-model="description" placeholder="Give some detail on your snippet"></textarea>
                </p>
            </div>

            <div class="field is-grouped">
                <p class="control">
                    <button @click="createSnip()" class="button is-primary">Submit</button>
                </p>
                <p class="control">
                    <button class="button is-link">Cancel</button>
                </p>

            </div>
        </div>
        </div>
        </div>
    </div>
</template>

<script>
    import Nav from './Navbar.vue';
    import axios from 'axios';
    import config from '../config';
    var Bearerconfig = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
    };
    const {apiHost} = config;
    export default {
        components: {
            appNavBar: Nav
        },
        data() {
            const code = '// Add your code here...';
            return {
                code,
                title : "",
                description: "",
                language: "",
                submitted: false,
                editorOption: {
                    tabSize: 4,
                    styleActiveLine: true,
                    lineNumbers: true,
                    line: true,
                    mode: 'text/x-go',
                    theme: 'mbo',
                    fullscreen: true
                }
            }
        },
        methods: {
            createSnip(){
                axios.post(config.apiHost + '/snip', {
                    code: this.code,
                    title: this.title,
                    description: this.description,
                    language: this.language

                }, Bearerconfig)
                    .then((response) => {
                        console.log(response);
                        this.title = "";
                        this.description = "";
                        this.language =  "";
                        this.code = "";
                        this.submitted = true;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                },
            uncheck(){
                this.submitted=false;
            }
        }
    }
</script>

<style>
    .CodeMirror {
        height: 70vh !important;
    }
</style>