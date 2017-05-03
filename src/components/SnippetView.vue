<template>
    <div>
        <app-nav-bar></app-nav-bar>
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
                            <input class="input" v-model="title" type=""  :placeholder="title">
                        </p>
                    </div>
                    <div class="field">
                        <label class="label">Language</label>
                        <p class="control">
                    <span class="select">
                      <select v-model="language">
                            <option>{{language}}</option>
                            <option>With options</option>
                            <option>Python</option>
                      </select>
                    </span>
                        </p>
                    </div>

                    <div class="field">
                        <label class="label">Description</label>
                        <p class="control">
                            <textarea class="textarea" v-model="description" :placeholder="description"></textarea>
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

    const {apiHost} = config;
    export default {
        components: {
            appNavBar: Nav
        },
        data() {
            const code = '// Add your code here...';
            return {
                code: code,
                title: "",
                description: "",
                language: "",
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
        created() {
            console.log(this.$route.params.id);
            axios.get(config.apiHost + `/snip/` + this.$route.params.id)
                .then(response => {
                    console.log(response.data);
                    var data = response.data;
                    console.log(data)
                    this.title = data.title;
                    this.code = data.code;
                    this.description = data.description;
                    this.language = data.language;
        })
                .catch(e => {

                })
        }
    }

</script>

<style>
    .CodeMirror {
        height: 70vh !important;
    }
</style>