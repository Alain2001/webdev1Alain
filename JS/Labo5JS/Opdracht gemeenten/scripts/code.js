const setup = () => {
    let gemeenten = [];
    let stop = false;

    while (!stop) {
        let gemeente = prompt("Gemeente:");

        if (gemeente.trim().toLowerCase() === "stop") {
            stop = true;
            break;
        }

        gemeenten.push(gemeente);
    }

    gemeenten.sort();

    let keuzelijst = "<select>";

    for (let i = 0; i < gemeenten.length; i++) {
        keuzelijst += "<option>" + gemeenten[i] + "</option>";
    }

    keuzelijst += "</select>";

    let div = document.getElementById("gemeentes");
    div.innerHTML = keuzelijst;

}

window.addEventListener("load", setup);