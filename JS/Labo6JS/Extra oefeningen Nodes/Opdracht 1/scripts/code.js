const setup = () => {
    let pText = document.querySelectorAll("p")[0];

    let newText = document.createTextNode("Good job!");

    pText.replaceWith(newText);
}


const change = () => {

}

window.addEventListener("load", setup);