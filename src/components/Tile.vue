<template>
    <div>
        <div class="columns" v-for="column in columns">
            <div class="column is-one-quarter" v-for="item in column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <iframe scrolling="no" :src="item.url" alt="Image"></iframe>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{{item.title}}</p>
                                <p class="subtitle is-6">{{item.language}}</p>
                            </div>
                        </div>

                        <div class="content">
                            {{item.description}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import config from '../config';

    const {apiHost} = config;

    export default {
        data() {
            return {
                columns: []
            }
        },
        created() {
                axios.get(config.apiHost + `/snip`)
                    .then(response => {
                        var column = [];
                        var data = response.data;

                        data.forEach(item => {
                            item.url = 'http://localhost:4200/snip/' + item.id;
                            column.push(item);
                            console.log(item);
                            if(column.length >= 4) {
                                this.columns.push(column);
                                column = [];
                            }
                        });
                        if(column.length > 0) {
                            this.columns.push(column);
                        }

                    })
                    .catch(e => {

                    })
            }

    }
</script>
<style>
    iframe{
        overflow: scroll;
        height: 220px;
        wideth: 960px;
    }
    .image.is-4by3 {
        padding-top: 0 !important;
    }
</style>