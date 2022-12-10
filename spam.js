const buttonEl = document.getElementById('button');
const textarea = document.getElementById('textarea');
const output = document.getElementById('output');


buttonEl.addEventListener('click', checkSpam);

function checkSpam() {

    let message = textarea.value;
    message = message.toLowerCase()
    if (message.includes('viagra')) {
        message = message.replace('viagra', '*****')
        output.innerHTML = message;
        textarea.value = '';
    } else if (message.includes('xxx')) {
        message = message.replace('xxx', '***')
        output.innerHTML = message;
        textarea.value = '';
    } else {
        output.innerHTML = textarea.value;
        textarea.value = '';
    }
}