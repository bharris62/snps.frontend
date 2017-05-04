<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title has-text-centered">
                        SNPS.CO
                      </h1>
                    <h2 class="subtitle has-text-centered">
                        Create. Organize. Share
                      </h2>
                </div>
            </div>
        </section>
        <div>
            <div class="columns">
                <div class="content is-medium">
                    <h3 class="has-text-centered">Java</h3>
                </div>
                <div class="content is-medium has-text-centered">
                    <h3 class="has-text-centered">Python</h3>
                </div>
                <div class="content is-medium">
                    <h3 class="has-text-centered">JavaScript</h3>
                </div>
                <div class="content is-medium bigger">
                    <h3 class="has-text-centered">Quick Snip</h3>
                </div>
            </div>
        </div>
        <div>
            <div class="columns">
                <div class="content is-medium">
                    <h3 class="has-text-centered">Ruby</h3>
                </div>
                <div class="content is-medium">
                    <h3 class="has-text-centered">Scala</h3>
                </div>
                <div class="content is-medium">
                    <h3 class="has-text-centered">Fortran</h3>
                </div>
                <div class="content is-medium bigger">
                    <h3 class="has-text-centered">Your Recent</h3>
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
                        if (column.length >= 4) {
                            this.columns.push(column);
                            column = [];
                        }
                    });
                    if (column.length <= 4) {
                        this.columns.push(column);
                    }
                })
                .catch(e => {

                })
        }
    }
</script>
<style>
    .content {
        width: 260px;
        height: 260px;
    }

    h3 {
        color: white;
    }

    .bigger {
        width: 500px;
        height: 260px;
        background-color: yellow;
    }
</style>