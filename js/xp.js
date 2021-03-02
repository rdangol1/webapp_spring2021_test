    var ddTravelled =document.querySelector("#ddTravelled");
    if (ddTravelled.value == "Yes"){
        var txtCountry = document.querySelector("#txtCountry");
        if( txtCountry.value == ""){
            document.querySelector("#divCountryError").classList.remove("invisible");
            txtCountry.classList.add("hasError");
            formIsValid = false;
        }
        else{
            document.querySelector("#divCountryError").classList.add("visible");
            txtCountry.classList.remove("hasError");
        }
    }

    var elements =document.getElementsByTagName("input");
    var invalidChars =['#', '!', '~', '<', '$', '>', '"', '`' ];
    for (let i=0; i <elements.length; i++){
        for (let j=0; i <invalidChars.length; j++){ 
            if (elements[i].value.indexOf(invalidChars[j]) != -1){
                elements[i].classList.add("hasError");
                formIsValid = false;
            }

        }
    }

    var elements = document.getElementsByTagName("input");
    var divinvalidError = document.querySelector("#divinvalidError");
    var invalidChars =['#', '!', '~', '<', '$', '>', '"', '`' ];
    for (let i=0; i <elements.length; i++){
        for (let j=0; i <invalidChars.length; j++){ 
            if (elements[i].value.indexOf(invalidChars[j]) != -1){
                document.querySelector("#divinvalidError").classList.remove("invisible");
                divinvalidError.innerHTML ="the field has invalid characters"
                elements[i].classList.add("hasError");
                formIsValid = false;
            }
            else{
                document.querySelector("#divinvalidError").classList.add("invisible");
                elements[i].classList.remove("hasError");
            }

        }
    }
