function displayAlert(element){
    alert(this);
    element.innerText = "Off";
}

function turnOff(element) {
    element.innerText = "Off";
    var h1 = document.querySelector("h1");
    var title = document.querySelector("#title");
    
    h1.innerText = "Nasri";
    h1.remove();
    h1.classList.add("dark-mode");
}




function setName(element) {
    var nameTag = document.querySelector("#name-tag");
    console.log(element.value);
    nameTag.innerText = element.value;
}



var y = 2;

var z = 3;
var x = "2";
    console.log(y+z+x);



