const setup = () => {
    vervangAlles();
}


const vervangAlles = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let words = tekst.split(" ");

    let nieuweWoorden = [];

    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.trim().toLowerCase() === "de") {
            word = "het";
        }
        nieuweWoorden.push(word);
    }
    let newTekst = nieuweWoorden.join(" ");
    console.log(newTekst);
}



window.addEventListener("load", setup);