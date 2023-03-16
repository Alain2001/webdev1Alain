const setup = () => {
    let btnValidate = document.getElementById("btnValidate");
    btnValidate.addEventListener("click", validate);

}

    const validate = () => {

        let familienaam = document.getElementById('familienaam');
        let geboortedatum = document.getElementById('geboortedatum');
        let email = document.getElementById('email');
        let aantalKinderen = document.getElementById('aantal-kinderen');


        if (familienaam.value.length === 0) {
            familienaam.style.border = "1px solid red";
            document.getElementById("familienaam-error").innerHTML = "Familienaam is verplicht";
        } else {
            familienaam.style.border = "";
            document.getElementById("familienaam-error").innerHTML = "";
        }
        if (geboortedatum.value.length === 0) {
            geboortedatum.style.border = "1px solid red";
            document.getElementById("geboortedatum-error").innerHTML = "Geboortedatum is verplicht";
        } else {
            geboortedatum.style.border = "";
            document.getElementById("geboortedatum-error").innerHTML = "";
        }
        if (email.value.length === 0) {
            email.style.border = "1px solid red";
            document.getElementById("email-error").innerHTML = "E-mail is verplicht";
        } else if (!validateEmail(email.value)) {
            email.style.border = "1px solid red";
            document.getElementById("email-error").innerHTML = "Voer een geldig e-mailadres in";
        } else {
            email.style.border = "";
            document.getElementById("email-error").innerHTML = "";
        }
        if (aantalKinderen.value < 0 || aantalKinderen.value > 98) {
            aantalKinderen.style.border = "1px solid red";
            document.getElementById("aantal-kinderen-error").innerHTML = "Voer een geldig aantal in (0-98)";
        } else {
            aantalKinderen.style.border = "";
            document.getElementById("aantal-kinderen-error").innerHTML = "";
        }
        // Als alle velden goed zijn ingevuld, toon de "proficiat!" popup
        if (familienaam.value.length !== 0 && geboortedatum.value.length !== 0 && email.value !== 0 && validateEmail(email.value) && !(aantalKinderen.value < 0 || aantalKinderen.value > 98)) {
            alert("Proficiat!");
        }
    };

    const validateEmail = (email) => {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


window.addEventListener("load", setup);