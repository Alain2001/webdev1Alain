const setup = () => {
    let btnSubstring=document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click",getSubstring);
}

const getSubstring = () => {
    let txtLinks = document.getElementById("txtLinks").value;
    let index1 = document.getElementById("index1").value;
    let index2 = document.getElementById("index2").value;
    let txtOutput = document.getElementById("txtOutput");

    let newSubstring = txtLinks.substring(index1,index2);
    txtOutput.innerHTML = newSubstring;
}


window.addEventListener("load", setup);