const setup = () => {

    let sliders = document.getElementsByClassName("slider");
    let btnSave = document.getElementById("btnSave");
    let savedSwatches = document.getElementById("savedSwatches");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    btnSave.addEventListener("click", saveColor);

    update();


}

const update = () => {
    let red = document.getElementById("sldRed").value;
    let blue = document.getElementById("sldBlue").value;
    let green = document.getElementById("sldGreen").value;

    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblBlue").innerHTML = blue;
    document.getElementById("lblGreen").innerHTML = green;

    let swatch = document.getElementById("colorDemo");
    swatch.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    saved
}

const saveColor = () => {
    let swatch = document.createElement("div");
    swatch.classList.add("savedSwatch");
    swatch.style.backgroundColor = document.getElementById("colorDemo").style.backgroundColor;

};


window.addEventListener("load", setup);