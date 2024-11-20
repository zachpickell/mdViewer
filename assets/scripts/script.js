document.addEventListener('DOMContentLoaded', function() {
    var md = window.markdownit();
    const input = document.getElementById('input');
    const output = document.getElementById('output');

    input.addEventListener('input', function() {
        output.innerHTML = md.render(input.value);
    });
});
