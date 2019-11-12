
function jsonify(key, value) {
    values = JSON.stringify({
        "val": value
    });
    var json_file = {};
    json_file[key] = values;
    chrom.storage.sync.set(json_file, function() {
        console.log("Saved", key, value);
    })
}

document.getElementById("logout_button").addEventListener("click", signout);
form = document.getElementById("form");
document.getElementById("form").addEventListener("submit", function() {
    console.log("Saving data...");
    jsonify("start_time", new Date.getTime());
    jsonify("first_emoji", form.value);
    chrome.browserAction.setPopup({popup: "timer.html"});
    window.location.href = "timer.html";
});