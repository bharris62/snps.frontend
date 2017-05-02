<template>
    <div>
        <div class="columns" v-for="column in columns">
            <div class="column is-one-quarter" v-for="item in column">
                <div class="tile is-parent">
                    <article class="tile is-child notification is-info">
                        <p class="title">{{item.title}}</p>
                        <p class="subtitle">With an image</p>
                        <figure class="image is-4by3">
                            <img src="http://bulma.io/images/placeholders/640x480.png">
                        </figure>
                    </article>
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
                axios.get(`${apiHost}/snip`)
                    .then(response => {
                        var column = [];
                        var data = response.data;

                        data.forEach(item => {
                            column.push(item);

                            if(column.length >= 4) {
                                this.columns.push(column);
                                column = [];
                            }
                        });
                        if(column.length > 0) {
                            this.columns.push(column);
                        }
                        console.log(data)
                    })
                    .catch(e => {

                    })
            }

    }
</script>