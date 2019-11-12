document.getElementById("logout_button").addEventListener("click", signout);
document.getElementById("form").addEventListener("submit", function() {
    console.log("Saving data...");
    value = document.querySelector('input[name="mood2"]:checked').value;
    jsonify("end_time", new Date().getTime());
    jsonify("second_emoji", value);
    chrome.browserAction.setPopup({popup: "results.html"});
    window.location.href = "results.html";
});