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
                     <span class="tag is-primary is-medium">{{language}}</span>
                    </span>
                        </p>
                    </div>

                    <div class="field is-disabled">
                        <label class="label">Description</label>
                        <p class="control">
                            <textarea class="textarea is-disabled" v-model="description" :placeholder="description"></textarea>
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
                     </p>
                <div class="block">
                    <a class="button is-outlined is-small" @click="likeComment(c.id)">Like</a>
                    <a v-if="c.isOwner" @click="deleteComment(c.id)" :value="c.id" class="button is-danger is-outlined is-small">Delete</a>
                </div>

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
                isOwner: false,
                likes: 0,
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
                        this.comment = "";
                        this.getComments();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            deleteComment(id){
                axios.delete(config.apiHost + '/snip/'+ '/comment/'  + id , {

                }, Bearerconfig)
                    .then((response) => {
                        console.log(response);
                        this.comment = "";
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            getComments(){
                axios.get(config.apiHost + `/snip/comment/` + this.$route.params.id)
                    .then(response => {
                        var data = response.data;
                        data.forEach(item => {
                            item.isOwner = false;
                            this.comments.push(item);

                            if(localStorage.getItem("username") === item.user.username) {
                                item.isOwner = true;
                            }
                        })
                    })
            },
            likeComment(id){
                axios.post(config.apiHost + '/snip/comment/rate/' + id, {
                    rate: "like"
                }, Bearerconfig)
                    .then((response) => {
                        this.likes += 1;
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
                            item.isOwner = false;
                            this.comments.push(item);

                          if(localStorage.getItem("username") == item.user.username) {
                              item.isOwner = true;
                          }
                        })
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