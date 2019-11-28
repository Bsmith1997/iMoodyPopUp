document.getElementById("back_button").addEventListener("click", signout);
document.getElementById("myForm").addEventListener("submit", function() {
    var request = new XMLHttpRequest()
    var email = document.getElementById("email").value;
    var pword = document.getElementById("pword").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    request.open('POST', 'https://imoodypopup-backend-1.herokuapp.com/newUser/' + email + '?password=' + pword + '&lastName=' + lname + "&firstName=" + fname, false);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.onload = function() {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      if (request.status >= 200 && request.status < 400) {
        console.log(data.email);
        account_page();
        Object.keys(data).forEach(function(key) {
            localStorage.setItem(key, data[key]);
        });

      }
    }
    
    request.send({});
})
