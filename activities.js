document.getElementById("body").addEventListener("load", function() {
    clearCategories();
})

var keys = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5'];
document.getElementById("form").addEventListener("submit", function() {
    for(var i = 0; i < keys.length; i++) {
        var value = document.querySelector('input[name=' + keys[i] + ']:checked');
        if(value !== undefined) {
            localStorage.set(key, value.value);
        }
    }
});