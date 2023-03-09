const setup = () => {

    let pBelangrijk = document.getElementsByClassName("belangrijk");

    let i;
    for (i = 0; i < pBelangrijk.length; i++) {
        pBelangrijk[i].classList.add("opvallend");
    }
}



window.addEventListener("load", setup);