document.getElementById("logout_button").addEventListener("click", signout);
document.getElementById("form").addEventListener("submit", function() {
    console.log("Saving data...");
    value = document.querySelector('input[name="mood"]:checked').value;
    jsonify("start_time", new Date().getTime());
    jsonify("first_emoji", value);
    chrome.browserAction.setPopup({popup: "timer.html"});
    window.location.href = "timer.html";
});