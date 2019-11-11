document.getElementById("signin").addEventListener("click", signin);
document.getElementById("signup").addEventListener("click", signup);
document.getElementById("signout").addEventListener("click", signout);

function signup() {
    chrome.browserAction.setPopup({popup: "signup.html"});
    window.location.href = "signup.html"
}

function signin() {
    chrome.browserAction.setPopup({popup: "signin.html"});
    window.location.href = "signin.html"
}

function signout() {
    chrome.browserAction.setPopup({popup: "popup.html"});
    window.location.href = "popup.html"

}