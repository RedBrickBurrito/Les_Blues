
function processForm() {
	clearFeedback();
    validateInput();
    alert("Tu cuenta ha sido creada exitosamente!!!")
    return false;
}



function validateInput() {
    var errorList = $("#errorList");
    var messageList = $("#messageList");
    var newErrors = "";

    if (!validateFirstname()) {
        newErrors += "<li>Invalid firstname. Use only letters</li>";
        $("#firstname").addClass("error");
    }

    if (!validateLastname()) {
        newErrors += "<li>Invalid lastname. Use only letters</li>";
        $("#lastname").addClass("error");
    }
   if(!validateTelefono()) {
      newErrors += "<li>Numero Invalido. Usa solo numeros</li>";
        $("#telefono").addClass("error");
    }

    if(!validateEmail()) {
    	newErrors += "<li>La direccíón de correo no es valida</li>"
    	$("#email").addClass("error");
    }


    if (newErrors.length != 0) {
        errorList.html(newErrors);
        $("#error").show();
    } else {
        messageList.html("<li>General Info Saved</li>");
        $("#success").show();
    }
}

function validateFirstname() {
    var regex = /^[A-Za-z]+$/i;
    var firstname = $("#firstname").val();
    return regex.test(firstname);
}

function validateEmail() {
	var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	var email = $("#email").val();
	return regex.test(email);
}

function validateLastname() {
    var regex = /^[A-Za-z]+$/;
    var lastname = $("#lastname").val();
    return regex.test(lastname);
}

function validateTelefono() {
    var regex = /^\d+$/;
    var telefono = $("#telefono").val();
    return regex.test(telefono);
}

function normalizeInput() {
    $("#firstname").val($("#firstname").val().trim().toUpperCase());  
    $("#lastname").val($("#lastname").val().trim().toUpperCase());
}

function clearFeedback() {
    var errorList = $("#errorList");
    errorList.html("");
    $(".error").removeClass("error");
    $("#error").hide();
    var messageList = $("#messageList");
    messageList.html("");
    $("#success").hide();    
}
