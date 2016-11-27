console.log('Loaded!');

/*//change the text of the main-text div
var element = document.getElementById("main-text");
element.innerHTML = "My Page";

//move the image
var img = document.getElementById("madi");
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
    
};*/
//Counter Code
var button = document.getElementById('counter');

button.onclick = function() {
 //Create a request object
    
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
          //Take some action
          if(request.status === 200) {
    var counter = request.responseText;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
          }
      }
      //Not done yet
    };
    
//Make the request
    request.open('GET', 'http://rameshcool.imad.hasura-app.io/counter', true);
    request.send(null);
};

//Submit username/password to login

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
   
         //Create a request object
    
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
          //Take some action
          if(request.status === 200) {
             //Capture a list of names and render it as a list
   console.log('user logged in');
   alert('Logged in successfully');
          } else if (request.status === 403) {
              alert('Username/password is incorrect');
          } else if (request.status === 500) {
              alert('Something went wrong on the server');
          }
      }
      //Not done yet
    };
    
    //Make the request
    var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
   console.log(username);
   console.log(password);
    request.open('POST', 'http://rameshcool.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));

};

    
