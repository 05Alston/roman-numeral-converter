var input1 = document.querySelector("#input-field1");
var output1 = document.querySelector("#output-field1");
var submit1 = document.querySelector("#submit-button1");
var input2 = document.querySelector("#input-field2");
var output2 = document.querySelector("#output-field2");
var submit2 = document.querySelector("#submit-button2");

var URL = "https://romans.justyy.workers.dev/api/romans/?cached&n="
function errorHandler(error) {
    alert("No response from server");
}

function clickHandler1(){
    fetch(URL+input1.value)
    .then(response => response.json())
    .then(json =>output1.innerText =  json.result)

    .catch(errorHandler)
};
function clickHandler2(){
    fetch(URL+input2.value)
    .then(response => response.json())
    .then(json =>output2.innerText =  json.result)

    .catch(errorHandler)
};


submit1.addEventListener("click", clickHandler1);
submit2.addEventListener("click", clickHandler2);