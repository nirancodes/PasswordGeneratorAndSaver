//THIRD SECTION OF APPLICATION: CRUD TABLE 




//validation of data before submission
function formValidity(){
    //DOM elements: references to elements in HTML to interact with using its ID using the assigned method
    let website = document.getElementById("website").value;
    let password = document.getElementById("password").value;

    //checks if inputs are empty; alert is sent and input is considered false
    if(website === ""){
        alert("Please enter the website."); 
        return false;
    }
    if(password ===""){
        alert("Please enter the password."); 
        return false;
    }
    else{
        return true;
    }
}

//function that displays data on the table
/*either it takes the list of entries from local storage, 
or if there aren't any entries yet, it initializes an array for it*/
function seeData(){
    let entrylist = JSON.parse(localStorage.getItem("entrylist"));
    if(localStorage.getItem("entrylist") == null){
        entrylist = []; 
    }
    
    let html = ""; 
    //creating a string; table row for each entry, in which html is the content
    entrylist.forEach(function (element, index){
        /*using the forEach method for arrays, it takes the information from the 
        entry list, for each array element, the function executes..
        takes 2 parameters: the current element and the index position of said element in the array
        */
        html += "<tr>";
        html += "<td>" + element.website + "</td>";
        html += "<td>" + element.password + "</td>";
        
        html += '<td><button onclick="deleteInfo('+
        index+
        ')" class="btn btn-danger">Delete</button><button onclick = "updateInfo('+ 
        index+')"class="btn btn-warning n-2">Edit</button></td>';

        html +="</tr>";
    });

    document.querySelector("#crudtable tbody").innerHTML = html; 
    //filling it in the html using innerHTML
}

//when refreshed...


window.onload = seeData;


//function to data

function addInfo(){
    //if form is validated
    if(formValidity() == true){
        let website = document.getElementById("website").value; 
        let password = document.getElementById("password").value; 

        let entrylist; 
        if(localStorage.getItem("entrylist") == null){
            entrylist = []; 
        }
        else{
            entrylist = JSON.parse(localStorage.getItem("entrylist"));
        }

        entrylist.push({
            website: website,
            password: password
        });
        //new entry being added here

        localStorage.setItem("entrylist", JSON.stringify(entrylist)); 
        seeData();

        document.getElementById("website").value = ""; 
        document.getElementById("password").value = ""; 
    }
}

//function to delete data 
function deleteInfo(index){
    let entrylist; 
    if (localStorage.getItem("entrylist") == null){
        entrylist = []; 
    } else {
        entrylist = JSON.parse(localStorage.getItem("entrylist"));
    }
    entrylist.splice(index, 1); 
    localStorage.setItem("entrylist", JSON.stringify(entrylist)); 
    seeData();
}

//function to update and edit
function updateInfo(index){
    // submit hides and update shows; for data in local storage
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";
    let entrylist; 
    if (localStorage.getItem("entrylist") == null){
        entrylist = []; 
    } else {
        entrylist = JSON.parse(localStorage.getItem("entrylist"));
    }

    document.getElementById("website").value = entrylist[index].website;
    document.getElementById("password").value = entrylist[index].password;

    document.querySelector("#Update").onclick = function(){
        //checking from html id
        if(formValidity()){//if it is true
            entrylist[index].website = document.getElementById("website").value;
            entrylist[index].password = document.getElementById("password").value; 

            localStorage.setItem("entrylist", JSON.stringify(entrylist));

            seeData();

            document.getElementById("website").value = ""; 
            document.getElementById("password").value = ""; 
            //update hides, submit shows
            document.getElementById("Submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        }
    }

}
