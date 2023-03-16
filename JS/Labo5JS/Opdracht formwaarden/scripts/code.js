const setup = () => {
    let btnToonResultaat = document.getElementById("btntoonResultaat");
    btnToonResultaat.addEventListener("click", show);
}

const show = () => {
    let isRoker = document.getElementsByName("isRoker")[0];
    let moederTaal = document.getElementsByName("moedertaal");
    let buurland = document.getElementsByName("buurland");
    let bestelling = document.getElementsByName("bestelling");


    if (isRoker.checked === true) {
        console.log("Is een roker");
    } else {
        console.log("Is geen roker");
    }

    for (let i = 0; i < moederTaal.length; i++) {
        if (moederTaal[i].checked) {
            console.log("moedertaal is:", moederTaal[i].value);
        }
    }

    for (let i = 0; i < buurland.length; i++) {
        if (buurland[i].selected) {
            console.log("favoriete buurland is:", buurland[i].value);
        }
    }


    let output = "";
    for (let i = 0; i < bestelling.length; i++) {
        if (bestelling[i].selected) {
            output += bestelling[i].value + " ";
        }
    }
    console.log("Bestelling bestaat uit", output);


    /*let geselecteerd = bestelling.selectedOptions;
    let output ="";
    for (let i = 0; i < geselecteerd.length; i++) {
        output += geselecteerd[i].value + " ";
    }
    console.log("Bestelling bestaat uit",output);*/

}

window.addEventListener("load", setup);