const setup = () => {
    countAn();
    countAnLastIndex()
}

let text = "De man van An geeft geen hand aan ambetante verwanten";
let zoekwoord = "an";

const countAn = () => {

    let count = 0;
    let index = text.indexOf(zoekwoord);

    while (index !== -1) {
        count ++;
        index = text.indexOf(zoekwoord, index +1);
        //console.log(index);
    }
    console.log(`"${zoekwoord}" komt ${count} keer voor in de tekst met method indexOf().`)
}


const countAnLastIndex = () => {
    let count = 0;
    let index = text.lastIndexOf(zoekwoord);
    //console.log(index)

    while (index !== -1) {
        count ++;
        index = text.lastIndexOf(zoekwoord, index -1);
    }
    console.log(`"${zoekwoord}" komt ${count} keer voor in de tekst met method lastIndexOf().`)
}

window.addEventListener("load", setup);