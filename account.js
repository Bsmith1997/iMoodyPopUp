keys = ['fname', 'lname', 'email', 'password', 'cat1', 'cat2', 'cat3', 'cat4', 'cat5'];
activities = {
    "cat1": ['soccer', 'football', 'basketball', 'golf'],
    "cat2": ['read a book', 'read a magazine', 'read the newspaper'],
    "cat3": ['cook a meal'],
    "cat4": ['hiking', 'biking', 'go to the park', 'swimming'],
    "cat5": ['board games']
};

var it = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5']
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