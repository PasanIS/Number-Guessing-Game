
let systemNumber = Math.floor((Math.random()*10)+1);
function verifyNumber(){
    if(document.getElementById("number_input").value > systemNumber){
        document.getElementById("msg").innerText = "Too high";
    }else if(document.getElementById("number_input").value < systemNumber){
        document.getElementById("msg").innerText = "Too low";
    }else{
        document.getElementById("msg").innerText = "Congratulations, \n You Won ...!";
    }
}

function clearFields() {
    document.getElementById("number_input").value = ""; // Clear the input field
    document.getElementById("msg").innerText = "";   // Clear the message
}

function refreshPage() {
    location.reload(); // Reload the page
}


