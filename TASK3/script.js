let input = document.querySelector('#input');
let img = document.querySelector('#qrimg');

function generateQr() {

    let qrBox = document.querySelector('qrbox');
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;


    if (input.value == 0) {
        input.style.border = "2px solid red"
        input.placeholder.style.color = "red"
    }
    else {
        input.style.border = "2px solid green"

    }

    img.style.display = "block";

}