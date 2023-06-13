const setup = () => {
    let liElements = document.getElementsByTagName("li");
    for (let i = 0; i < liElements.length; i++) {
        //liElements[i].className = "listitem";
        liElements[i].setAttribute("class","colorRed");
    }

    let picture  =document.createElement('img');
    picture.setAttribute("src","images/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg");

    document.querySelector("body").appendChild(picture)
}

window.addEventListener("load", setup);