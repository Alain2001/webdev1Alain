const setup = () => {
    let imgChanger = document.getElementById("img");


    imgChanger.addEventListener("mouseover",change)

}
const change = () =>{
    document.getElementById("img").src ="./images/kat.jpg";
    document.getElementById("img").alt = "kat";
    document.getElementById("text").innerHTML = "foto van een kat";

}
window.addEventListener("load", setup);