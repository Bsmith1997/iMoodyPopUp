document.getElementById("back_button").addEventListener("click", signout);
document.getElementById("myForm").addEventListener("submit", function() {
    var request = new XMLHttpRequest()
    var email = document.getElementById("email").value;
    var pword = document.getElementById("pword").value;
    account_page();
    request.open('GET', 'https://imoodypopup-backend-1.herokuapp.com/login/' + email + '/' + pword, false)
    request.onload = function() {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      if (request.status >= 200 && request.status < 400) {
        data.forEach(data => {
          console.log(data.ema)
        })

      } else {
        console.log('error')
      }
    }
    
    request.send();
})
