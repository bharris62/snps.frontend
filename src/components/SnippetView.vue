<template>
    <div>
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
        <article class="media">
            <div class="media-content">
                <div class="field">
                    <p class="control">
                        <textarea class="textarea" v-model="comment" placeholder="Add a comment..."></textarea>
                    </p>
                </div>
                <nav class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <a @click="addComment()" class="button is-info">Submit</a>
                        </div>
                    </div>
                </nav>
            </div>
        </article>
        <article class="media" v-for="c in comments">
            <figure class="media-left">
                <p class="image is-64x64">
                    <img src="http://bulma.io/images/placeholders/128x128.png">
                </p>
            </figure>
            <div class="media-content">
                <div class="content" >
                    <p>
                        <strong>{{c.user.username}}</strong>
                        <br>
                            {{c.comment}}
                        <br>
                        <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
                    </p>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
    import Nav from './Navbar.vue';
    import axios from 'axios';
    import config from '../config';

    const {apiHost} = config;
    var Bearerconfig = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
    };
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
                comment: "",
                comments: [],
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
            addComment() {
                axios.post(config.apiHost + '/snip/' + this.$route.params.id + '/comment', {
                    comment: this.comment,

                }, Bearerconfig)
                    .then((response) => {
                        console.log(response);
                        this.comment = "";
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        created() {
            axios.get(config.apiHost + `/snip/` + this.$route.params.id)
                .then(response => {
                    var data = response.data;
                    this.title = data.title;
                    this.code = data.code;
                    this.description = data.description;
                    this.language = data.language;
                })
                .catch(e => {

                }),
                axios.get(config.apiHost + `/snip/comment/` + this.$route.params.id)
                    .then(response => {
                        var data = response.data;

                        data.forEach(item => {
                          this.comments.push(item);
                        })
                    })
                    .catch(e => {

                    })
            console.log("bottom", this.comments);
            }
    }

</script>

<style>
    .CodeMirror {
        height: 70vh !important;
    }
</style>