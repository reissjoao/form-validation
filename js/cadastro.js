/* VALIDAÇÃO FORMULÁRIO */ 

const fields = document.querySelectorAll("[required]");

// console.log(fields)

function customValidation(event) {
    const field = event.target

    // logica para verificar se existem erros 
    function verifyErrors() {
        let foundError = false;
        
        for(let error in field.validity){
            if (error !== "customError" && field.validity[error]){
                foundError = true
            }
        }

        return foundError;
    }
    
    const error = verifyErrors()
    console.log("Error Exists: ", error)

    if (error) {
        // trocar mensagem de required 
        field.setCustomValidity("Esse campo é obrigatório")
    } else {
        field.setCustomValidity("")
    } 
}

for (field of fields) {
    field.addEventListener("invalid", customValidation)
}


