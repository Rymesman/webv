var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
   return input.value.length;
};

function createDoc() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
};

function funcClick() {
    if(inputLength() > 0) {
        createDoc();
    }    
};

function funcKeypress(event) {
        if(inputLength() > 0 && event.which === 13) {
            createDoc();
        }
}

button.addEventListener("click", funcClick); 

input.addEventListener("keypress", funcKeypress);