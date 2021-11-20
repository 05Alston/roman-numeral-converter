var input = document.querySelector("#input-field");
var output = document.querySelector("#output-field");
var submit = document.querySelector("#submit-button");

var URL = "https://api.funtranslations.com/translate/roman-numerals.json?text="

function errorHandler(error) {
    alert("No response from server");
}

function clickHandler(){
    fetch(URL+input.value)
    .then(response => response.json())
    .then(json =>output.innerText =  json.contents.translated)

    .catch(errorHandler)
};


submit.addEventListener("click", clickHandler);