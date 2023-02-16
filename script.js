var inputs;

document.addEventListener("DOMContentLoaded", function (event) {
    const p = document.querySelector("[name='pass']");
    const p2 = document.querySelector("[name='passv']");

    p2.addEventListener('change', (event) => { // input changed value
        if (p.value != p2.value) {
            p2.setCustomValidity('Passwords must be matching.');
        } else {
            p2.setCustomValidity('');
        }
    });
});

function validateForm() {
    inputs = document.getElementsByTagName("input");

    return true; 
}