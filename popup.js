document.getElementById("signin").addEventListener("click", signin);
document.getElementById("signup").addEventListener("click", signup);
document.getElementById("signout").addEventListener("click", signout);

chrome.runtime.onMessage.addListener(function(msg,sender,sendResponse){
    if(msg.from == 'bkgnd' && msg.subject == 'browserAction') {
        chrome.browserAction.setPopup({popup: "popup.html"});
        window.location.href = "popup.html";
    }
});