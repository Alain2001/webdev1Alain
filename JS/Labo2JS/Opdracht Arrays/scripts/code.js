const setup = () => {
}

// schrijf naar de console hoeveel elementen de array bevat
let familieleden = ["Boris", "Jonas","Jessica", "Johan","Samantha"]

console.log(familieleden.length);


// schrijf het eerste, derde en vijfde element uit de array naar de console

console.log(familieleden[0],familieleden[2],familieleden[4])

/* Vraag met prompt() een extra naam op en voeg deze toe aan de Array. Probeer dit via een zelf
geschreven functie VoegNaamToe. Maak gebruik van pass-by-reference. Schrijf vervolgens het
resultaat naar de console */

const VoegNaamToe = (naam) => {
    let newName = naam;
    let task = window.prompt("Is " + newName + " your correct name?")
    if (task != null && task.toLowerCase() === "yes") {
        familieleden.push(newName);
        console.log("Welcome " + naam + " you've been added to the familymembers!")
        console.log((familieleden));
    } else {
        console.log("Please enter your name correctly")
    }
}

// Converteer de array naar een string en toon deze op de console.
let stringInArray = familieleden.toString()
console.log(stringInArray)





window.addEventListener("load", setup);