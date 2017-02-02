


var mySurvey = document.getElementById("survey");
mySurvey.addEventListener("change", loadData,false);

var myManufacturer = document.getElementById("manufacturer");
myManufacturer.addEventListener("change", loadData,false);

function loadData(){
    
    
    
    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value; // whatever I selected index of option i received values
    
    //console.log(manufacturerStored);
    
    
    
    var myRequest = new XMLHttpRequest; //XMLHttpRequest is the main object to establish to communication between server and browser, but we have to have myRequest.open and myrequest.send
    
    myRequest.open("GET","https://raw.githubusercontent.com/biatoSalo/Training/master/JSONAJAXExerciseLearner/expensiveLuxuryCars.json", true) // This open method received 3 PARAMETERS. First one is GET. the second one (http). When myRequest is open I get the http .
    
    
    //We need condition if data arrived
    myRequest.onload = function(){
        
        
        if(myRequest.readyState == 4 && myRequest.status==200){
            
            var myData = JSON.parse(myRequest.responseText); //JSON.parse() is to method that changes JSON format of data to JavaScript Object.
            
            //console.log(myData);
            
            if(manufacturerStored ===""){
                
                function clearAll(){
                    
                    var hideText = document.getElementsByClassName("data");
                    
                    for(var i=0;i < hideText.length; i++){
                        hideText[i].innerHTML = "";
                    }
                    
                }
                   clearAll();
            
            document.getElementById("messageAlert").innerHTML = "Please you must choose xcar manufacturer to load data..";
            } else{
                
                // now dispalying data in our fields
                document.getElementById("manufacturerC").innerHTML = myData.data[manufacturerStored].manufacturer;
                
                document.getElementById("modelC").innerHTML = myData.data[manufacturerStored].model;
                
            
                document.getElementById("priceC").innerHTML = "£ " + myData.data[manufacturerStored].price;
                
                document.getElementById("descriptionC").innerHTML = myData.data[manufacturerStored].description;
                
                document.getElementById("videoC").innerHTML = '<iframe with="auto" height="auto" src= "'+myData.data[manufacturerStored].video+'"framework = "0" allowfullscreen></iframe>';
                
                document.getElementById("overallC").innerHTML = myData.data[manufacturerStored].manufacturer;
                document.getElementById("mechanicalC").innerHTML = myData.data[manufacturerStored].manufacturer;
                document.getElementById("powertrainC").innerHTML = myData.data[manufacturerStored].manufacturer;
                document.getElementById("bodyC").innerHTML = myData.data[manufacturerStored].manufacturer;
                document.getElementById("interiorC").innerHTML = myData.data[manufacturerStored].manufacturer;
                document.getElementById("accesoriesC").innerHTML = myData.data[manufacturerStored].manufacturer;
               
               
            }
            
        }
           
    }
    
    myRequest.send();//We have to send request; grab request and send
    
    
    
    //console.log(myRequest);
    
    
    
    
    
}



