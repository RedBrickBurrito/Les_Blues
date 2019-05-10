
function processForm() {
	clearFeedback();
    validateInput();
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
    var regex = /^[A-Z]{1,30}$/i;
    var firstname = $("#firstname").val();
    return regex.test(firstname);
}

function validateEmail() {
	var regex = /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/gm;
	var email = $("#email").val();
	return regex.test(email);
}

function validateLastname() {
    var regex = /^[A-Z]{1,30}$/i;
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
