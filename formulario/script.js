document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al botón "Iniciar Sesión"
    var signInButton = document.getElementById("sign-in");

    // Agregar un controlador de eventos para el clic del botón
    signInButton.addEventListener("click", function() {
        // Obtener los valores de los campos de correo y contraseña
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Simular proceso de inicio de sesión (puedes hacer aquí la validación real con una base de datos)
        if (email === "user@example.com" && password === "contraseña") {
            // Si los datos son válidos, redireccionar al usuario a "formulario.html"
            window.location.href = "formulario.html";
        } else {
            // Mostrar un mensaje de error si los datos son incorrectos
            alert("Credenciales incorrectas. Por favor, intente nuevamente.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al botón "Crear"
    var btnCrear = document.getElementById("btn-crear");

    // Agregar un controlador de eventos para el clic del botón "Crear"
    btnCrear.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir que el formulario se envíe automáticamente

        // Obtener referencia al formulario
        var formulario = document.getElementById("formulario");

        // Obtener los valores de los campos del formulario
        var pregunta1Value = formulario.elements["pregunta1"].value;
        var pregunta2Value = formulario.elements["pregunta2"].value;
        var pregunta3Value = formulario.elements["pregunta3"].value;
        var pregunta4Value = formulario.elements["pregunta4"].value;
        var pregunta6Value = formulario.elements["pregunta6"].value;
        var pregunta7Value = formulario.elements["pregunta7"].value;
        var pregunta8Value = formulario.elements["pregunta8"].value;

        // Imprimir los valores en la consola
        console.log("Nombres:", pregunta1Value);
        console.log("Apellidos:", pregunta2Value);
        console.log("DNI:", pregunta3Value);
        console.log("Número celular:", pregunta4Value);
        console.log("Tipo de compra:", pregunta6Value);
        console.log("Pregunta 7:", pregunta7Value);
        console.log("Pregunta 8:", pregunta8Value);
    });
});
