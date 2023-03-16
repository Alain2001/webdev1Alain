const setup = () => {
    let btnShow = document.getElementById("btnShow");
    btnShow.addEventListener("click",showText);
}

const maakMetSpaties = (inputText) => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        result += inputText[i] + " ";
    }
    return result;
};

const showText = () => {
    let input = document.getElementById("txtInput").value;
    let separated = maakMetSpaties(input);
    console.log(separated);
}

window.addEventListener("load", setup);