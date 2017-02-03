//alert("kdfgdflk");
//This is my JS folder for TFL journey planner
var getDepPC;
var getArrPC;
var ChoiceOption; //This is to use for my switch conditional
var myList;
var journeyDuration;
var minutes;
var hours;

//End of variables

// User experience to better help them navigate and use tha app

document.getElementById("depPC").focus();
document.getElementById("googleMap").style.display = "none";


var getJourneyData = document.getElementById("mySubmit").addEventListener("click", loadMyData, false);

var postCodeSwitch = document.getElementById("mySwitch").addEventListener("click", switchMyPostCode, false);

var routeOption1 = document.getElementById("option1").addEventListener("click", loadMyData, false);

var routeOption2 = document.getElementById("option2").addEventListener("click", option2Data, false);

var routeOption3 = document.getElementById("option3").addEventListener("click", option3Data, false);



function loadMyData(){
    // I will go and get the values of the post code from the user
    
    getDepPC = document.getElementById("depPC").value;
    getArrPC = document.getElementById("arrPC.").value;
    conole.log("getArrPC");
    console.log("getDepPC");
    
    if(getdepPC === "" ){
       
        document.getElementById("depPC").focus();
        document.getElementById("messageD").innerHTML = "Please enter a Valid POSTCODE";
                          
        
    }else if(getArrPC ===""){
        document.getElementById("depPC").focus();
        document.getElementById("messageA").innerHTML = "Please enter a Valid POSTCODE";   
        
    } else {
        
        document.getElementById("messageA").style.display = "none"; 
        document.getElementById("messageD").style.display = "none";
        
        
        
        
        // Now we have to grab AJAX
        
        var myRequest = new XMLHttpRequest; //We create an instance of XMLH
        
        myRequest.open("GET","https://api.tfl.gov.uk/journey/journeyresults/" +getDepPC+ "/to/" +getArrPC, true); 
                       //establish communication
                       
        myRequest.onload = function(){ 
            
            if(myRequest.readyState ==4 && myRequest.status==200){
                
                var myData = JASON.parse(myRequest.repsonse.text);
                
                
                myList = document.getElementById("stepsD");
                
                
               switch(ChoiceOption){
                        
                        case(1): 
                        document.getElementById("startDT").innerHTML = "Date:  " + myData.journeys[1].startDateTime.replace("T", " |  Time:  ");
                        
                        break;
                        
                        case(2):
                            
                       
                       document.getElementById("arrivalDT").innerHTML = "Date:  " + myData.journeys[1].arrivalDateTime.replace("T", " |  Time:  ");
                       
                       journeyDuration = myData.journeys[1].duration;
                       
                       journeyD(journeyDuration);
                       
                       for( var i=0; i< myData.journeys[1].legs.length; i++){
                           
                           myList.innerHTML += "- " + myData.journeys[1].legs[i].instructions.summary + "<br/>";
                           
                         
                       }
                       
                       ChoiceOption = 0;
                       
                        
                        break;
                       
                       
                        
                        case(3):
                       
                       document.getElementById("arrivalDT").innerHTML = "Date:  " + myData.journeys[3].arrivalDateTime.replace("T", " |  Time:  ");
                       
                       journeyDuration = myData.journeys[3].duration;
                       
                       journeyD(journeyDuration);
                       
                       for( var i=0; i< myData.journeys[3].legs.length; i++){
                           
                           myList.innerHTML += "- " + myData.journeys[3].legs[i].instructions.summary + "<br/>";
                           
                         
                       }
                       
                       ChoiceOption = 2;
                        
                    default:
                       
                       document.getElementById("arrivalDT").innerHTML = "Date:  " + myData.journeys[0].arrivalDateTime.replace("T", " |  Time:  ");
                       
                       journeyDuration = myData.journeys[0].duration;
                       
                       journeyD(journeyDuration);
                       
                       for( var i=0; i< myData.journeys[0].legs.length; i++){
                           
                           myList.innerHTML += "- " + myData.journeys[0].legs[i].instructions.summary + "<br/>";
                           
                         
                       }

                        break;
                }
                
                
                
                //console.log(myData);
            }
        }
     
        myRequest.send(); 
    }   
    
        
       
    }
    
    // this is my Switch function to change postcode
    
function switchMyPostCode(){
    
    getDepPC = document.getElementById("depPC").value;
    getArrPC = document.getElementById("arrPC").value;
    
    document.getElementById("depPC").value = getArrPC;
    document.getElementById("arrPC").value = getDepPC;
    
}
function option2Data(){
    
    ChoiceOption = 1;
    loadMyData();
}

function option3Data(){
    
    ChoiceOption = 2;
    loadMyData();
}

function journeyD(journeyDuration){
    
    hours = Math.trunc(journeyDuration/60);
    minutes = journeyDuration % 60;
    document.getElementById("journeyD").innerHTML = +hours + ":" + minutes + "h/m";
}


