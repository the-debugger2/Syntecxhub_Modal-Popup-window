var modal = document.getElementById("payment-container");
var btn = document.getElementsByClassName("pop-up-btn");
var cancel = document.getElementsByClassName("btn-Cancel");


window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("show");
    }
}

function openModal() {
    modal.classList.add("show");
}

function closeModal() {
    modal.classList.remove("show");
}