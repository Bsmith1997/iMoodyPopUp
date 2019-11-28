document.getElementById("back_button").addEventListener("click", signout);
document.getElementById("myForm").addEventListener("submit", function() {
    var request = new XMLHttpRequest()
    var email = document.getElementById("email").value;
    var pword = document.getElementById("pword").value;
    request.open('GET', 'https://imoodypopup-backend-1.herokuapp.com/login/' + email + '?password=' + pword, false)
    var success = false;
    request.onload = function() {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      if (request.status >= 200 && request.status < 400) {
        console.log(data.email);
        account_page();
        success = true;
        Object.keys(data).forEach(function(key) {
          localStorage.setItem(key, data[key]);
      });
      
      } else {
        console.log('error')
      }
    }
    
    request.send();
    return success;
}, false)
