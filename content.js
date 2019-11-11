chrome.browserAction.setPopup({popup: "logged_in.html"});

// wherever you can do this in your code
function login_success() {
    /* ... */
    chrome.storage.local.set({logged_in: true});
    chrome.browserAction.setPopup({popup: "account.html"});
  }
  
  function login_failure() {
    /* ... */
    chrome.storage.local.set({logged_in: false});
    chrome.browserAction.setPopup({popup: "popup.html"});
  }
  
  // This goes into eventPage.js and executes once on extension load
  chrome.storage.local.get("logged_in", function(data) {
    if(data.logged_in)
      chrome.browserAction.setPopup({popup: "account.html"});
  });