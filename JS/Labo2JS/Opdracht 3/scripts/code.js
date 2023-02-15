const setup = () => {
    let btnWijzig=document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click", wijzig);

    //let pElement=document.getElementById("txtOutput");
    //pElement.innerHTML="Welkom!";
}



const wijzig = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}

window.addEventListener("load", setup);