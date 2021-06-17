// TODO: add code here
let json = []; 

window.addEventListener("load", function() {
   
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            const container = document.getElementById("container");     
            // const statusCheck = document.getElementById("status"); 
            const astronautCount = document.getElementById("numberOfAstronauts");
           
            astronautCount.innerHTML = `The astronaut count is ${json.length}`;
        
            // json.sort();

            //Display the astronauts sorted from most to least time in space.
            function sortByProperty(property){  
                return function(a,b){  
                   if(a[property] < b[property])  
                      return 1;  
                   else if(a[property] > b[property])  
                      return -1;  
               
                   return 0;  
                }  
             }

            json.sort(sortByProperty("hoursInSpace"));

            let abcd = "";

            for(i=0;i<json.length;i++){
                let statusChecking = json[i].active;        
                       if(statusChecking === true){
                           abcd = "status";// adding the style 
                       }
                 // let statusCheck = document.getElementsByClassName("status");
                    // if (`${json[i].active}` === "true"){
                    // if(statusCheck.innerHTML === true)
                    // alert("checking if active is true");
                    // statusCheck.style["color"] = "green";
                    // document.getElementById('status').classList.add('greenColor');
                    // statusCheck.className= 'greenColor';
                                // }
                
                container.innerHTML += `<div class="astronaut">
                <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                <li>Hours in space: ${json[i].hoursInSpace}</li>
                <li class=${abcd}>Active: ${json[i].active}</li>
                <li>Skills: ${json[i].skills}</li>
                </ul>
                </div>
                <img class="avatar" src=${json[i].picture}>
                </div>`;               
            }
           
          
            // alert(statusCheck);
           

            // json.sort();
     
            // if (${json[i].active} === "true"){
            //     <li id = "status">Active: ${json[i].active}</li>
            // }

         


        });
    });
});
