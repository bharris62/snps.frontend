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

        <div class="tile is-ancestor" v-for="column in columns">
            <div class="tile is-parent" v-for="item in column">
                <a v-bind:href="item.url">
                    <article class="tile is-child box is-4 ">
                        <p class="title">{{item.title}}</p>
                        <p class="subtitle">{{item.user.username}}</p>
                        <content>
                            <h6>{{item.description}}</h6>
                        </content>
                    </article>
                </a>
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
    .box {
        /*border: 1px solid red;*/
        /*display: flex;*/
        /*flex-wrap: wrap;*/
        /*margin: 0 auto;*/
        /*max-width: 2000px;*/
    }
    .tile {
        border: 1px solid black;
        margin: 0 auto;
        flex-grow: 1;
        padding: 0;
        height: 220px;
        min-width: 250px;
        /*max-width: 250px;*/
    }
    @media screen and (max-width: 1140px) {
        .box {
            max-width: 850px;
        }
    }
    @media screen and (max-width: 2040px) {
        .box {
            max-width: 1750px;
        }
    }
    @media screen and (max-width: 1790px) {
        .box {
            max-width: 1500px;
        }
    }
    @media screen and (max-width: 1540px) {
        .box {
            max-width: 1250px;
        }
    }
    @media screen and (max-width: 1290px) {
        .box {
            max-width: 1000px;
        }
    }
    @media screen and (max-width: 1040px) {
        .box {
            max-width: 750px;
        }
    }
    @media screen and (max-width: 790px) {
        .box {
            max-width: 500px;
        }
    }
</style>