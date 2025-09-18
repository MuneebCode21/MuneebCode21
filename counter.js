let count = 0;
const res = 0;

const countNumber = document.getElementById("countNumber");

document.getElementById("decreaseBtn").onclick = function() {
    count--;
    countNumber.textContent = count;
};

document.getElementById("resetBtn").onclick = function() {
    count = res; 
    countNumber.textContent = count;
};

document.getElementById("increaseBtn").onclick = function() {
    count++;
    countNumber.textContent = count;
};

window.alert("YOU ARE A NIGGA");
prompt("TYPE IT MF");
console.log("GOOD BOY");


let x=3.98;
let y=2;
let z;
let e=81;
let a=45;
let b=-5;

z=Math.pow(x,y);
console.log(z);

z=Math.sqrt(e);
console.log(z);

z=Math.round(x);
console.log(z);

z=Math.ceil(x);
console.log(z);

z=Math.floor(x);
console.log(z);

let max=Math.max(x,y,z);
console.log(max);
let min=Math.min(x,y,z);
console.log(min);

z=Math.cos(x);
console.log(z);

z=Math.abs(b);
console.log(z);

const mySubmit = document.getElementById("mySubmit");
mySubmit.onclick = function() {
    let MyAge = Number(document.getElementById("MyAge").value);

    if(MyAge <= 25){
        alert("Young person");
        console.log("Gen Z");
        document.getElementById("Something").textContent = "You are just a teenager";
    }
    else if(MyAge <= 50){
        alert("Millennial gang");
        console.log("Respect");
        document.getElementById("Something").textContent = "You are an adult";
    }
    else if(MyAge <= 100){
        alert("Congrats you're old");
        console.log("Congrats you're officially old");
        document.getElementById("Something").textContent = "Congrats, you are old!";
    }
    else{
        alert("Nice try");
        console.log("Invalid age");
        document.getElementById("Something").textContent = "You aren't required here";
    }
}

