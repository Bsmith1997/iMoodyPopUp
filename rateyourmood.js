document.getElementById("logout_button").addEventListener("click", signout);
form = document.getElementById("form");
form.addEventListener("submit", function() {
    chrome.browserAction.setPopup({popup: "timer.html"});
    window.location.href = "timer.html";
    console.log("Saving data...");
    jsonify("start_time", new Date.getTime());
    jsonify("first_emoji", form.value);

});