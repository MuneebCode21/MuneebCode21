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
