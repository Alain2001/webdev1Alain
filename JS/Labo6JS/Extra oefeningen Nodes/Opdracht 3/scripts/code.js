const setup = () => {

    let divElement = document.getElementById("myDIV");
    let pElement = document.createElement("p");

    let pText = document.createTextNode("some text in the new p element");
    pElement.appendChild(pText);


    divElement.appendChild(pElement);

}

window.addEventListener("load", setup);