document.getElementById("body").addEventListener("load", function(){
    getUrlVars();
    renderValues();
});

document.getElementById("logout_button").addEventListener("click", signout);

document.getElementById("rateyourmood_button").addEventListener("click", rate_your_mood);