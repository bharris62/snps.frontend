<template>
    <div>
        <app-nav-bar></app-nav-bar>
    <md-card>
        <md-card-actions v-md-ink-ripple>
            <div class="md-subhead">
                <span>mode: {{ editorOption.mode }}</span>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <span>theme: {{ editorOption.theme }}</span>
            </div>
            <md-button class="md-icon-button"
                       target="_blank"
                       href="https://github.com/surmon-china/vue-codemirror/tree/master/examples/09-text-x-go.vue">
                <md-icon>code</md-icon>
            </md-button>
        </md-card-actions>
        <md-card-media>
            <div class="codemirror">
                <!-- codemirror -->
                <codemirror v-model="code" :options="editorOption"></codemirror>
            </div>
        </md-card-media>
    </md-card>
    </div>
</template>

<script>
    import Nav from './Navbar.vue'
    export default {
        components: {
            appNavBar: Nav
        },
        data() {
            const code = '// Add your code here...';
            return {
                code,
                editorOption: {
                    tabSize: 4,
                    styleActiveLine: true,
                    lineNumbers: true,
                    line: true,
                    mode: 'text/x-go',
                    theme: 'mbo'
                }
            }
        }
    }
</script>

<style scoped>

</style>