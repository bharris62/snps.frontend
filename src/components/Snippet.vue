<template>
    <article>
        <h2>Let's Snip it</h2>
        <form><textarea id="code" name="code">
            ;; If there is Scheme code in here, the editor will be in Scheme mode.
            ;; If you put in JS instead, it'll switch to JS mode.

            (define (double x)
              (* x x))
        </textarea></form>
    </article>
</template>
<script>

        import CodeMirror from 'codemirror';
        export default {
            created() {
                var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
                    mode: "scheme",
                    lineNumbers: true
                });
                var pending;
                editor.on("change", function () {
                    clearTimeout(pending);
                    pending = setTimeout(update, 400);
                });
                function looksLikeScheme(code) {
                    return !/^\s*\(\s*function\b/.test(code) && /^\s*[;\(]/.test(code);
                }

                function update() {
                    editor.setOption("mode", looksLikeScheme(editor.getValue()) ? "scheme" : "javascript");
                }
            }
    }
</script>
<style scoped>
    .CodeMirror {border: 1px solid black;}
</style>