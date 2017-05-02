<template>
    <div>
        <app-nav-bar></app-nav-bar>

        <div class="column is-two-thirds box">
            <div class="codemirror">
                <!-- codemirror -->
                <codemirror v-model="code" :options="editorOption"></codemirror>
            </div>
        </div>
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
                    theme: 'mbo',
                    fullscreen: true
                }
            }
        }
    }
</script>

<style scoped>

</style>