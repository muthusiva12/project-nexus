function validate() {
    var error=document.getElementById('message');
    var emailid=document.getElementById("error");
    var email=emailid.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email)) {
        error.style.display='none';
        emailid.style.border = "2px solid #2ecc71";
            } 
            else if(email==''){
                error.style.display='none';  
                emailid.style.border='2px solid #d1d3d4';
            }
            else {
                error.style.display='block';
                emailid.style.border="2px solid red";
    }
}
let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");

btnLogin.onclick = function(){
    signIn.classList.add("active");
    signUp.classList.add("inActive");
}

btnSignUp.onclick = function(){
   signIn.classList.remove("active");
   signUp.classList.remove("inActive");
}

