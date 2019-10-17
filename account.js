keys = ['fname', 'lname', 'email', 'password'];
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

        localStorage.setItem(keys[i], vars[keys[i]]);
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

    if(localStorage.getItem('mood') !== undefined) {
        localStorage.setItem("mood2", vars['mood']);
        return;
    }

    document.getElementById('mood').innerHTML = vars['mood'];
}