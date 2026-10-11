document.getElementById("loginButton");
let loginButton = document.getElementById("loginButton");
console.log(loginButton);
loginButton.addEventListener("click", function() {
    window.location.href = "dashboard.html";
}); 

let newUserButton = document.getElementById("NEWUSER");
console.log(newUserButton);
newUserButton.addEventListener("click", function() {
    window.location.href = "register.html";
});  

 