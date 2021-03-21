function updateCountryView(){
    var ddTravelled = document.getElementById("ddTravelled");
    var divCountry = document.getElementById("divCountry");
    if (ddTravelled.value =="Yes"){
        divCountry.classList.remove("invisible");
    } 
    else{
        divCountry.classList.add("invisible");
    }
}

function validateForm(){
    var DoB = document.querySelector("#txtDOB");
    var divDoBError = document.querySelector("#divDoBError");
    var formIsValid =true;

    if (DoB.value == ""){
        divDoBError.classList.remove("invisible");
        divDoBError.innerHTML ="the Date of birth canot be empty."
        DoB.classList.add("hasError");
        formIsValid = false;
    }

    else{
        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();
        if(DoBDate >= todayDate){
            divDoBError.classList.remove("invisible");
            divDoBError.innerHTML =" Date of birth must be before today's date."
            DoB.classList.add("hasError");
            formIsValid = false;
        }
        else{
            divDoBError.classList.add("invisible");
            divDoBError.innerHTML =""
            DoB.classList.remove("hasError");
            
        }
    }

    var ddTravelled =document.querySelector("#ddTravelled");
    if (ddTravelled.value == "Yes"){
        var txtCountry = document.querySelector("#txtCountry");
        if( txtCountry.value == ""){
            document.querySelector("#divCountryError").classList.remove("invisible");
            divCountryError.innerHTML ="the field cannot be empty."
            txtCountry.classList.add("hasError");
            formIsValid = false;
        }
        else{
            document.querySelector("#divCountryError").classList.add("visible");
            txtCountry.classList.remove("hasError");
        }
    }

    var elements = document.getElementsByTagName("input");
    var invalidChars = ['#', '!', '~', '<', '$', '>', '"', '`' ];
    for (let i=0; i< elements.length; i++){
        for (let j=0; j< invalidChars.length; j++){
            if(elements[i].value.indexOf(invalidChars[j]) != -1){
                document.querySelector("#divinvalidError").classList.remove("invisible");
                divinvalidError.innerHTML ="the field has an invalid";
                elements[i].classList.add("hasError");
                formIsValid = false;
            }
            else {
                elements[i].classList.remove("hasError");
            }
        
        }
        
    }
    return formIsValid;

}



