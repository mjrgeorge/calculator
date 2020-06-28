function insert(num) {
    document.form.input_text.value = document.form.input_text.value + num;
}

function clean() {
    document.form.input_text.value = '';
}

function equal() {
    document.form.input_text.value = eval(document.form.input_text.value);
}

function percent() {
    let perc = document.form.input_text.value;
    document.form.input_text.value = perc/100;
}

function back() {
    let bck = document.form.input_text.value;
    document.form.input_text.value = bck.substring(0, bck.length - 1);
}