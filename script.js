let nameInput;
let ageInput;
let nameList = [];
let ageList = [];
let nameUserList = [];
let ageUserList = [];
let buttonId = 0;
let numberOfInput = 0;

function submitButton() {

    nameInput = document.getElementById("name-input").value;
    ageInput = document.getElementById("age-input").value;
    nameList.push(nameInput);
    ageList.push(ageInput);

    localStorage.setItem("name" + numberOfInput, nameInput);
    localStorage.setItem("age" + numberOfInput, ageInput);
    numberOfInput++;
    localStorage.setItem('limit', numberOfInput);
    let table = document.getElementById("table-display");
    let button = document.createElement("BUTTON");        // Create a <button> element
    let text = document.createTextNode("Check");       // Create a text node


    if (nameInput != "" && ageInput != "") {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let txt1 = document.createTextNode(nameInput);
        let txt2 = document.createTextNode(ageInput);

        button.appendChild(text);
        button.id = "Check" + buttonId; buttonId++;
        button.setAttribute("onclick", "checkVowel(this.id,nameInput , ageInput)");
        button.setAttribute("class", "trigger");
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


    document.getElementById("name-input").value = "";
    document.getElementById("age-input").value = "";
}

function checkVowel(clickedId, name, age) {

    console.log(clickedId[5]);

    let i = clickedId[5];
    let flag = 1;
    name = nameList[i];
    age = ageList[i];
    console.log(ageList[i]);
    // console.log(age);
    for (n = 0; n < name.length; n++) {
        //console.log(name[n]);


        if (name[n] == "a" || name[n] == "A" || name[n] == "e" || name[n] == "E" || name[n] == "i" || name[n] == "I" || name[n] == "o" || name[n] == "O" || name[n] == "u" || name[n] == "U") {
            flag = 0;
            //console.log(n);
        }
    }

    if (flag == 0) {

        if (age >= 18) {
            document.getElementById("message").innerHTML = " The name " + name + " contains a vowel and is an adult";
            el = document.getElementById("overlay");
            el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
        }
        else {
            document.getElementById("message").innerHTML = " The name " + name + " contains a vowel and not a adult";
            el = document.getElementById("overlay");
            el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
        }
    }

    else {
        if (age >= 18) {
            document.getElementById("message").innerHTML = " The name " + name + " does not contain a vowel and is an adult";
            el = document.getElementById("overlay");
            el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
        }
        else {
            document.getElementById("message").innerHTML = " The name " + name + " does not contain a vowel and is not a adult";
            el = document.getElementById("overlay");
            el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
        }
    }

}

function sendData() {


    let nameUser;
    let limit = localStorage.getItem('limit');
    console.log(limit);
    for (let i = 0; i < limit; i++) {
        nameUserList[i] = localStorage.getItem("name" + i);
        ageUserList[i] = localStorage.getItem("age" + i);
        console.log(nameUserList[i]);
        console.log(ageUserList[i]);
    }
    let table = document.getElementById("table-display");
    let button = document.createElement("BUTTON");        // Create a <button> element
    let text = document.createTextNode("Check");       // Create a text node
    button.appendChild(text);
    for (let z = 0; z < limit; z++) {
        console.log(z);

        let table = document.getElementById("table-display");
        let button = document.createElement("BUTTON");        // Create a <button> element
        let buttonText = document.createTextNode("Check");       // Create a text node
        button.appendChild(buttonText);

        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");


        let columnOneText = document.createTextNode(nameUserList[z]);
        let columnTwoText = document.createTextNode(ageUserList[z]);


        button.id = "Check" + buttonId; 
        buttonId++;
        button.setAttribute("onclick", "checkVowel2(this.id,nameInput , ageInput)");
        button.setAttribute("class", "trigger");
        // console.log("Check"+i);
        td1.appendChild(columnOneText);
        td2.appendChild(columnTwoText);
        td3.appendChild(button);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
    }

}

function overlay() {
    el = document.getElementById("overlay");
    el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

function checkVowel2(clickedId, name, age) {

    console.log(clickedId[5]);

    let arrayNumber = clickedId[5];
    let vowelcheck = 1;
    name = nameUserList[arrayNumber];
    age = ageUserList[arrayNumber];
    console.log(name);
    // console.log(age);
    for (n = 0; n < name.length; n++) {
        //console.log(name[n]);


        if (name[n] == "a" || name[n] == "A" || name[n] == "e" || name[n] == "E" || name[n] == "i" || name[n] == "I" || name[n] == "o" || name[n] == "O" || name[n] == "u" || name[n] == "U") {
            vowelcheck = 0;
            console.log(n);
        }
    }

    if (vowelcheck == 0) {

        if (age >= 18) {
            document.getElementById("message").innerHTML = " The name " + name + " contains a vowel and is an adult";
            el = document.getElementById("overlay");
            el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
        }
        else {
            document.getElementById("message").innerHTML = " The name " + name + " contains a vowel and not a adult";
            el = document.getElementById("overlay");
            el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
        }
    }

    else {

        if (age >= 18) {
            document.getElementById("message").innerHTML = " The name " + name + " does not contain a vowel and is an adult";
            el = document.getElementById("overlay");
            el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
        }
        else {
            document.getElementById("message").innerHTML = " The name " + name + " does not contain a vowel and is not a adult";
            el = document.getElementById("overlay");
            el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
        }
    }

}