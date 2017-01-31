//This is my JS for password excercise
var access = "manuel";

var i= 0;
var wrongPassword = [];

document.getElementById("myButton").addEventListener("click",checkPassword,false);// grab the button , make a listening

function checkPassword(){
    
    var userPassword = document.getElementById("userP").value;
    
    if (userPassword !== access && userPassword !==""){
        
        //if()
      
        alert("wrong password");
        //console.log("userPassword");
        
    } else if (userPassword ===""){
        
        /*userPassword.value = "access"
        alert("Login correect")*/
        
        alert("Is empty enter password");
        
    }else{
       
        alert("That's correct");
    }
    
    //console.log("userPassword");
    
    //
    
   // alert("I am connected when you clikc me");
}
//checkPassword();