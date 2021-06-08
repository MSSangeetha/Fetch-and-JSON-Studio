// TODO: add code here
let json = []; 

window.addEventListener("load", function() {
   
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            const container = document.getElementById("container");     
            // const statusCheck = document.getElementById("status"); 

        
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



            for(i=0;i<json.length;i++){

                let statusCheck = document.getElementById("status");
                
                if (`${json[i].active}` === "true"){
                    // if(statusCheck.innerHTML === true)
                    alert("checking if active is true");
                    
                    // status.style.color = '#008000';
                    // statusCheck.style.color = 'green';
                    statusCheck.style["color"] = "green";
                    // document.getElementById('status').classList.add('greenColor');
                    // statusCheck.className= 'greenColor';
                
                }
                container.innerHTML += `<div class="astronaut">
                <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                <li>Hours in space: ${json[i].hoursInSpace}</li>

                <li id="status">Active: ${json[i].active}</li>

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
