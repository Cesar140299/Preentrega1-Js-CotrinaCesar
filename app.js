let cliente = prompt ("Eres Cliente? colocar si o no")
const contrasenia = 12345


function Inicio_de_sesion() {
    if (cliente == "si") {
    alert("Bienvenido")
    let contrasenia_ingresada = Number(prompt("Ingrese su contraseña"))
    if ((contrasenia==contrasenia_ingresada) && (contrasenia_ingresada != "")) {
        alert("Ingreso Exitoso.")
    } else {
        while (contrasenia_ingresada!==contrasenia) {
            contrasenia_ingresada = Number(prompt("Contraseña incorrecta, intente de nuevo"))
        }   //  Como podria hacer lo mismo pero con un ciclo for?
    }
} else if (cliente =="no"){
    let deseo_de_registro = prompt("Desea Registrarse? Coloque si o no")
    if (deseo_de_registro=="si") {
        let nombre_usuario = prompt("Coloque su nombre de usuario")
        prompt("Coloque su contraseña")
        alert(`Usuario Registrado. Bienvenido ${nombre_usuario}` )

    } else {
        alert("Entendido, hasta luego")
    }
} else {
    alert("Esa opcion no existe")
}
}

Inicio_de_sesion()