keys = ['fname', 'lname', 'email', 'password', 'mood1', 'mood2'];
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