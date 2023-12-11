// script para el perfil de usuario
let cuentas = [
  { nombre: "Mali", password: "123", saldo: 200 },
  { nombre: "Gera", password: "321", saldo: 290 },
  { nombre: "Maui", password: "132", saldo: 67 },
];
let usuario = localStorage.getItem("usuario");
//obtener la posición del usuario en el array de cuentas
let IdCuenta;
for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].nombre == usuario) {
        IdCuenta = i;
        break;
    }
}

// Obtén el elemento del sidebar
let sidebar = document.querySelector(".sidebar");

// Agrega un event listener al sidebar
sidebar.addEventListener("click", function (event) {
  // Verifica si se hizo clic en un botón
  if (
    event.target.tagName.toLowerCase() === "input" &&
    event.target.type === "button"
  ) {
    // Dependiendo del valor del botón, realiza una acción diferente
    switch (event.target.value) {
      case "Consultar saldo":
        console.log("Mostrando saldo...");
        // Aquí puedes agregar el código para mostrar el saldo
        mainbar = document.querySelector(".mainbar");
        //borrar todo lo que hay en el mainbar
        mainbar.innerHTML = "";
        //crear un div para el saldo
        let saldo = document.createElement("div");
        //agregar id al div
        saldo.setAttribute("id", "saldo");
        //insertar el div en el mainbar
        mainbar.appendChild(saldo);
        //inyectar html al div saldo
        saldo.innerHTML = `
                <h2>SALDO ACTUAL</h2>
                <p>$${cuentas[IdCuenta].saldo}.00 MXN</p>
                `;
        break;
      case "Ingresar monto":
        console.log("Mostrando espacio para ingresar monto...");
        // Aquí puedes agregar el código para mostrar el espacio para ingresar un monto
        mainbar = document.querySelector(".mainbar");
        mainbar.innerHTML = "";
        let ingresar = document.createElement("div");
        ingresar.setAttribute("id", "ingresar");
        mainbar.appendChild(ingresar);
        ingresar.innerHTML = `  
                <h2>¿Cuál es el monto que deseas ingresar?</h2>
                <p>Por favor ingresa el monto que deseas agregar a tu saldo.</p>
                <input type="number" value="" id="depositarMonto">
                <input type="button" value="Ingresar" id="depositarButton">
                `;
        ingresar.addEventListener("click", function (event) {
          if (
            event.target.tagName.toLowerCase() === "input" &&
            event.target.type === "button"
          ) {
            switch (event.target.value) {
              case "Ingresar":
                let montoIngresar =
                  document.getElementById("depositarMonto").value;
                if (cuentas[IdCuenta].saldo + parseInt(montoIngresar) > 990) {
                  alert("No puedes tener un saldo mayor de $990.00 MXN");
                } else if (cuentas[IdCuenta].saldo + parseInt(montoIngresar) <= 990) {
                  cuentas[IdCuenta].saldo += parseInt(montoIngresar);
                  alert(
                    `Has ingresado $${montoIngresar}.00 MXN. Tu saldo actual es de $${cuentas[IdCuenta].saldo}.00 MXN`
                  );
                }
                //recargar el p por favor ingresa un monto menor o igual a $${cuentas[0].saldo}.00 MXN.
                ingresar.innerHTML = `  
                                <h2>¿Cuál es el monto que deseas ingresar?</h2>
                                <p>Por favor ingresa el monto que deseas agregar a tu saldo.</p>
                                <input type="number" value="" id="depositarMonto">
                                <input type="button" value="Ingresar" id="depositarButton">
                                `;
                break;
            }
          }
        });
        break;
      case "Retirar monto":
        console.log("Mostrando espacio para retirar monto...");
        // Aquí puedes agregar el código para mostrar el espacio para retirar un monto
        mainbar = document.querySelector(".mainbar");
        mainbar.innerHTML = "";
        let retirar = document.createElement("div");
        retirar.setAttribute("id", "retirar");
        mainbar.appendChild(retirar);
        retirar.innerHTML = `  
                <h2>¿Cuál es el monto que deseas retirar?</h2>
                <p>Por favor ingresa un monto menor o igual a $${cuentas[IdCuenta].saldo}.00 MXN.</p>
                <input type="number" value="" id="retirarMonto">
                <input type="button" value="Retirar" id="retirarButton">
                `;
        retirar.addEventListener("click", function (event) {
          if (
            event.target.tagName.toLowerCase() === "input" &&
            event.target.type === "button"
          ) {
            switch (event.target.value) {
              case "Retirar":
                let montoRetirar =
                  document.getElementById("retirarMonto").value;
                if (montoRetirar > cuentas[IdCuenta].saldo) {
                  alert("No tienes suficiente saldo para retirar esa cantidad");
                } else if (cuentas[IdCuenta].saldo - montoRetirar < 10) {
                  alert(
                    "No puedes retirar esa cantidad, tu saldo debe contar al menos con $10.00 MXN"
                  );
                } else {
                  cuentas[IdCuenta].saldo -= montoRetirar;
                  alert(
                    `Has retirado $${montoRetirar}.00 MXN. Tu saldo actual es de $${cuentas[IdCuenta].saldo}.00 MXN`
                  );
                }
                //recargar el p por favor ingresa un monto menor o igual a $${cuentas[0].saldo}.00 MXN.
                retirar.innerHTML = `
                                <h2>¿Cuál es el monto que deseas retirar?</h2>
                                <p>Por favor ingresa un monto menor o igual a $${cuentas[IdCuenta].saldo}.00 MXN.</p>
                                <input type="number" value="" id="retirarMonto">
                                <input type="button" value="Retirar" id="retirarButton">
                                `;
                break;
            }
          }
        });
        break;
      case "Salir":
        console.log("Redirigiendo a la página de inicio...");
        // Aquí puedes agregar el código para redirigir al usuario a la página de inicio
        window.location.href = "index.html"; // Cambia 'index.html' a la URL de tu página de inicio
        break;
    }
  }
});
