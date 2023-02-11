
export function showSuccessMessage(message) {
    document.getElementById("message-content-id").innerHTML = message;
    enableSuccessIcon();
    disableErrorIcon();
    showMessage();
}

export function showErrorMessage(message) {
    document.getElementById("message-content-id").innerHTML = message;
    disableSuccessIcon();
    enableErrorIcon();
    showMessage();
}

function showMessage() {
    document.getElementById("message-div-id").style.display = "block";
}
function enableSuccessIcon() {
    document.getElementById("message-success-icon-div").style.display = "block";
}
function disableSuccessIcon() {
    document.getElementById("message-success-icon-div").style.display = "none";
}
function enableErrorIcon() {
    document.getElementById("message-error-icon-div").style.display = "block";
}
function disableErrorIcon() {
    document.getElementById("message-error-icon-div").style.display = "none";
}