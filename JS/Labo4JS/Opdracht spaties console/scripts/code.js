const setup = () => {
    let show = document.getElementById("btnShow");
    show.addEventListener("click",update);

}


const update = () => {
    let input = document.getElementById("txtInput").value;
    let output = input.split("").join(" ");
    console.log(output)
}


window.addEventListener("load", setup);