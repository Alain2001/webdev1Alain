const setup = () => {

    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
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

}

window.addEventListener("load", setup);