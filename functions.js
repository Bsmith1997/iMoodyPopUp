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

function login() {
    chrome.storage.local.set({logged_in: true});
    chrome.browserAction.setPopup({popup: "logged_in.html"});
}

function logout() {
    chrome.storage.local.set({logged_in: false});
    chrome.browserAction.setPopup({popup: "default.html"});
}

function rate_your_mood() {
    chrome.browserAction.setPopup({popup: "rateyourmood.html"});
    window.location.href = "rateyourmood.html"
}
  
  // This goes into eventPage.js and executes once on extension load
 function on_render() {
    chrome.storage.local.get("logged_in", function(data) {
        if(data.logged_in)
          chrome.browserAction.setPopup({popup: "account.html"});
      });
    
 } 

 keys = ['fname', 'lname', 'email', 'password', 'cat1', 'cat2', 'cat3', 'cat4', 'cat5'];
activities = {
    "cat1": ['soccer', 'football', 'basketball', 'golf'],
    "cat2": ['read a book', 'read a magazine', 'read the newspaper'],
    "cat3": ['cook a meal'],
    "cat4": ['hiking', 'biking', 'go to the park', 'swimming'],
    "cat5": ['board games']
};

var it = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5'];
var numEvents = 5;
var events = [];
function getRandomEvents() {
    for(var i = 0; i < numEvents; i++) {
        if(localStorage.getItem(it[i])) {
            var rand = Math.floor(Math.random() * activities[it[i]].length);
            events.push(activities[it[i]][rand]);
        }
    }

    for(var i = 0; i < events.length; i++) {
        document.getElementById('actlist').innerHTML += "<li>" + events[i] + "</li>";        
    }
}

function clearCategories() {
    for(var i = 0; i < it.length; i++) {
        localStorage.removeItem(it[i]);
    }
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });

    if(isEmpty(vars)) {
        renderValues();
        return;
    }

    for(var i = 0; i < keys.length; i++) {
        var element = document.getElementById(keys[i]);
        if(element !== null && element !== undefined) {
            document.getElementById(keys[i]).innerHTML = vars[keys[i]];
        }
        if(vars[keys[i]] != undefined && vars[keys[i]] != null) {
            localStorage.setItem(keys[i], vars[keys[i]]);
        }
    }
}

function renderValues() {
    for(var i = 0; i < keys.length; i++) {
        var value = localStorage.getItem(keys[i]);
        if(value !== undefined && value !== null && document.getElementById(keys[i]) !== null) {
            document.getElementById(keys[i]).innerHTML = value;
        }
    }
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function getEmojiVar() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });

    if(localStorage.getItem('init_time') == undefined || vars['mood'] != null) {
        localStorage.setItem('mood', vars['mood']);
        localStorage.setItem('init_time', new Date().getTime());
        return;
    }

    if(localStorage.getItem('mood') != 'undefined' && vars['mood2'] != null) {
        localStorage.setItem("mood2", vars['mood2']);
        localStorage.setItem('total_time', new Date().getTime());
    }
}

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
  