//obtener datos de usuario y contraseña
//comprobar si el usuario existe en la lista de usuarios
let cuentas = [
  { nombre: "Mali", password: "123", saldo: 200 },
  { nombre: "Gera", password: "321", saldo: 290 },
  { nombre: "Maui", password: "132", saldo: 67 },
];

let formularioHTML = document.getElementById("login");
let espacioErrorUsuario = document.getElementById("usernameMessage");
let espacioErrorPassword = document.getElementById("passwordMessage");

function validar(usuario, password) {
  let IdCuenta;
  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].nombre == usuario) {
      IdCuenta = i;
      break;
    }
  }
  if (IdCuenta == undefined) {
    return "Selecciona un usuario*";
  } else {
    cuenta = cuentas[IdCuenta];
    if (password != cuenta.password) {
      return "La contraseña no es válida*";
    } else if (password == cuenta.password) {
      return true;
    }
  }
}

formularioHTML.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputUser = document.getElementById("Usuario").value;
  let inputPassword = document.getElementById("Clave").value;
  if (validar(inputUser, inputPassword) == true) {
    console.log(`bienvenido ${inputUser}}`);
    //guardar el nombre del usuario en el local storage
    localStorage.setItem("usuario", inputUser);
    window.location.href = "profile.html";
  } else if (validar(inputUser, inputPassword) == "Selecciona un usuario*") {
    espacioErrorUsuario.innerHTML = validar(inputUser, inputPassword);
  } else if (
    validar(inputUser, inputPassword) == "La contraseña no es válida*"
  ) {
    espacioErrorPassword.innerHTML = validar(inputUser, inputPassword);
  }
  //timer para que se borren los mensajes de error
  setTimeout(() => {
    espacioErrorUsuario.innerHTML = "";
    espacioErrorPassword.innerHTML = "";
  }, 2000);
});

