const btn = document.getElementById("btn");
const result = document.getElementById("result");

const checkboxSubscribe = document.getElementById("checkboxSubscribe");
const checkboxComment = document.getElementById("checkboxComment");
const checkboxRing = document.getElementById("checkboxRing");

btn.onclick = function() {
    let message = "LOLLLL";     // terminary operator

    if (checkboxSubscribe.checked) {
        console.log("subscribe checked");
        message += "You are subscribed. ";
    } else {
        console.log("subscribe not checked");
    }

    if (checkboxComment.checked) {
        console.log("comment checked");
        message += "You can comment. ";
    } else {
        console.log("comment not checked");
    }

    if (checkboxRing.checked) {
        console.log("ring checked");
        message += "You can ring.";
    } else {
        console.log("ring not checked");
    }

    result.textContent = message;  //terminary operator
};

 let day=4;
    switch(day) {
        case 1:
            console.log("Monday");
            break; 
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday"); 
            break;
        case 4:
            console.log("Thursday");    
            break;
         default:
                console.log("Another day");
    }

    let userName="admin";
    console.log(userName.charAt(2));
    console.log(userName.lastIndexOf("i"));
    console.log(userName.length[3]);
    console.log(userName.toUpperCase());
    console.log(userName.toLowerCase());
    console.log(userName.trim(3));
    console.log(userName.includes("n"));
    console.log(userName.startsWith("a"));
    console.log(userName.endsWith("i"));
    console.log(userName.repeat(3));

const Username="adminkabotar haseeb";
let firstname=Username.slice(0,3).repeat(2);
let lastname=Username.slice(6,9).toLowerCase();
let longname=Username.slice(0,Username.indexOf(" "));
console.log(firstname);
console.log(lastname);
console.log(longname);

let firstchar=Username.slice(0,1).toUpperCase();
console.log(firstchar);

const email="Neeb12@gmail.com";
let lol=email.slice(0,email.indexOf("@"));
let cheeb=email.slice(email.indexOf("@")+1);
console.log(lol);
console.log(cheeb);

let username = window.prompt("Enter your name"); 

if (username) { 

    username=username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();

    console.log(username); 
    window.alert(`Welcome here ${username}`);
} else {
    console.log("No name entered.");
}

let temp = 11;

if (temp > 30 && temp <= 50) {
    console.log("Normal weather");
}
else if (temp > 50 && temp <= 70) {
    console.log("Hot weather");
}
else if (temp > 0 && temp <= 10 || temp === 12) {
    console.log("Cold weather");
}
else {
    console.log("Extreme weather");
}

let Broname=" ";

while(Broname===" " || Broname==="null"){
    Broname = window.prompt(`Enter your area name`);
    
}

console.log(`Your name is ${Broname}`);

let loggedIn=false;
let name;
let password;

while(!loggedIn){
    name=window.prompt("Enter your name");
    password=window.prompt("Enter your password");

    if (name==="admin" && password==="12345"){
        loggedIn=true;
        console.log("You are logged in");
    }
    else{
        console.log("Incorrect credentials, try again");
    }
}

for (let i=10; i<20; i++){
    if(i===15){
        continue;
    }
    if (i==17){
        break;
    }
    else{
        console.log(i);
    }        
}
