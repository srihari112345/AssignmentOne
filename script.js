let nameInput;
let ageInput;
let nameList = [];
let ageList = [];
let nameUserList = [];
let ageUserList = [];
let i=0;
let x=0;

// console.log("In script");
function submitButton(){
    
    nameInput = document.getElementById("name-input").value;
    ageInput = document.getElementById("age-input").value;
    nameList.push(nameInput);
    ageList.push(ageInput);
    // console.log(nameInput); 
    // console.log(nameList[0]);

    localStorage.setItem("name"+x, nameInput);
    localStorage.setItem("age"+x, ageInput);
    x++;
    localStorage.setItem('limit' , x);
    let table = document.getElementById("table-display");
    let button = document.createElement("BUTTON");        // Create a <button> element
    let text = document.createTextNode("Check");       // Create a text node
                                    
    
    if(nameInput!="" && ageInput!="" )
    {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let txt1 = document.createTextNode(nameInput);
    let txt2 = document.createTextNode(ageInput);
    
    button.appendChild(text);
    button.id="Check"+i; i++;
    // button.onClick="checkVowel()";
    // button.Attributes.add("onclick","checkVowel()");
    button.setAttribute("onclick", "checkVowel(this.id,nameInput , ageInput)");
    button.setAttribute("class" , "trigger");
    // console.log("Check"+i);
    td1.appendChild(txt1);
    td2.appendChild(txt2);
    td3.appendChild(button);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);
    }
    else {
        alert("Enter the details");
    }
    

    document.getElementById("name-input").value="";
    document.getElementById("age-input").value="";
}

function checkVowel(clickedId, name , age) {

    console.log(clickedId[5]);

    let i=clickedId[5];
    let flag=1;
    name= nameList[i];
    age= ageList[i];
    console.log(ageList[i]);
    // console.log(age);
    for(n=0 ; n< name.length ; n++)
    {
         //console.log(name[n]);


        if(name[n]== "a" ||name[n]== "A" || name[n]== "e" || name[n]== "E" || name[n]== "i" || name[n]== "I" || name[n]== "o" ||name[n]== "O" || name[n]== "u" || name[n]== "U" ){
                flag=0;
                //console.log(n);
        }
    }

    if(flag == 0){
            
            if(age >= 18)
            {
                document.getElementById("message").innerHTML =" The name "+name+" contains a vowel and is an adult";
                el = document.getElementById("overlay");
                el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
            }
            else{
                document.getElementById("message").innerHTML =" The name "+name+" contains a vowel and not a adult";
                el = document.getElementById("overlay");
                el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
            }
    } 
 
    else
    {
        if( age >= 18){
            document.getElementById("message").innerHTML =" The name "+name+" does not contain a vowel and is an adult";
            el = document.getElementById("overlay");
            el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
        }
        else{
            document.getElementById("message").innerHTML =" The name "+name+" does not contain a vowel and is not a adult";
            el = document.getElementById("overlay");
            el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
        }
    }

}

function sendData(){
    

    let nameUser;
    let limit= localStorage.getItem('limit');
    console.log(limit);
    //console.log("new page");
    //console.log(localStorage.getItem(1));
    for(let i=0 ; i<limit ; i++)
    {
         nameUserList[i] = localStorage.getItem("name"+i);
         ageUserList[i] = localStorage.getItem("age"+i);
         console.log(nameUserList[i]);
         console.log(ageUserList[i]);
    }
    // console.log(nameList.pop());
    // console.log(nameList.pop());
    let table = document.getElementById("table-display");
    let button = document.createElement("BUTTON");        // Create a <button> element
    let text = document.createTextNode("Check");       // Create a text node
    button.appendChild(text);                                
    for(let z=0; i<limit ; z++)
    {
        console.log(z);

        let table = document.getElementById("table-display");
        let button = document.createElement("BUTTON");        // Create a <button> element
        let text = document.createTextNode("Check");       // Create a text node
        button.appendChild(text);                        
        
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
   
    
        let txt1 = document.createTextNode(nameUserList[z]);
        let txt2 = document.createTextNode(ageUserList[z]);
    
    
        button.id="Check"+i; i++;
        // button.onClick="checkVowel()";
        // button.Attributes.add("onclick","checkVowel()");
        button.setAttribute("onclick", "checkVowel2(this.id,nameInput , ageInput)");
        button.setAttribute("class" , "trigger");
        // console.log("Check"+i);
        td1.appendChild(txt1);
        td2.appendChild(txt2);
        td3.appendChild(button);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
    }
    
}   

function overlay(){
        el = document.getElementById("overlay");
        el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

function checkVowel2(clickedId, name , age) {

    console.log(clickedId[5]);

    let i=clickedId[5];
    let flag=1;
    name= nameUserList[i];
    console.log(name);
    // console.log(age);
    for(n=0 ; n< name.length ; n++)
    {
         //console.log(name[n]);


        if(name[n]== "a" ||name[n]== "A" || name[n]== "e" || name[n]== "E" || name[n]== "i" || name[n]== "I" || name[n]== "o" ||name[n]== "O" || name[n]== "u" || name[n]== "U" ){
                flag=0;
                //console.log(n);
        }
    }

    if(flag == 0){
            
        if(age >= 18)
        {
            document.getElementById("message").innerHTML =" The name "+name+" contains a vowel and is an adult";
            el = document.getElementById("overlay");
            el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
        }
        else{
            document.getElementById("message").innerHTML =" The name "+name+" contains a vowel and not a adult";
            el = document.getElementById("overlay");
            el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
        }
    } 

        else{
            
            if( age >= 18){
                document.getElementById("message").innerHTML =" The name "+name+" does not contain a vowel and is an adult";
                el = document.getElementById("overlay");
                el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
            }
            else{
                document.getElementById("message").innerHTML =" The name "+name+" does not contain a vowel and is not a adult";
                el = document.getElementById("overlay");
                el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
            }
    }

}
// if(flag == 0)
    // {
    //     var modal = document.querySelector(".modal");
    //     var trigger = document.querySelector(".trigger");
    //     var closeButton = document.querySelector(".close-button");

    //     function toggleModal() {
    //         modal.classList.toggle("show-modal");
    //         document.getElementById("message").innerHTML="A vowel is present";
    //         console.log("Open window");
    //     }


    //     function windowOnClick() {

    //         // if (event.target === modal) {
    //         //     toggleModal();
    //         // }
    //         modal.classList.toggle("hide-modal");
    //         //document.getElementById("message").innerHTML="A vowel is present";
    //         console.log("windowOnclick window");
            
    //     }
        
    //      function closeModal(){
    //          modal.classList.toggle("hide-modal");
    //         console.log("close window");
    //      }
    

    //     trigger.addEventListener("click", toggleModal);
    //     closeButton.addEventListener("click", closeModal);
    //     window.addEventListener("click", windowOnClick);
    // }






// function newPage(){
//     let table = document.getElementById("table-display");
//     let button = document.createElement("BUTTON");        // Create a <button> element
//     let text = document.createTextNode("Check"); 
//     button.appendChild(text);
//     let tr = document.createElement("tr");
//     let td1 = document.createElement("td");
//     let td2 = document.createElement("td");
//     let td3 = document.createElement("td");
//     td1.appendChild("Name");
//     td2.appendChild("Age");
//     td3.appendChild("Check");
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     table.appendChild(tr);

//     console.log("Srihari");
//     let txt1 = document.createTextNode(nameInput);
//     let txt2 = document.createTextNode(ageInput);
//     button.id="Check"+i; i++;
//     button.setAttribute("onclick", "checkVowel(this.id,nameInput , ageInput)");
//     button.setAttribute("class" , "trigger");
//     td1.appendChild(txt1);
//     td2.appendChild(txt2);
//     td3.appendChild(button);
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     table.appendChild(tr);
// }
   

    

    // if(flag==0)
    // {
        
    //     var i, l;
    //     newWindow = window.open("", null, "height=200,width=400,status=yes,toolbar=no,menubar=no,location=no");  
    
    //     newWindow.document.write("<p> The name, "+name+" contains a vowel </p>");
     
    // function setValue(value) {
    //     document.getElementById('value').value = value;
    // }
    // }
    // else
    // {
    //     var i, l;
    //     newWindow = window.open("", null, "height=200,width=400,status=yes,toolbar=no,menubar=no,location=no");  
    
    //     newWindow.document.write("<p> The does not have a  vowel </p>");
     
    //     function setValue(value) {
    //     document.getElementById('value').value = value;
    // }

    







