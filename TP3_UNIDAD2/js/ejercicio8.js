const data = [
    { nombre: "Juan", apellido: "Pérez", edad: 33, sexo: "Masculino", telefono: "34190650" },
    { nombre: "Marcos", apellido: "González", edad: 25, sexo: "Masculino", telefono: "39456895" },
    { nombre: "Carla", apellido: "Ramírez", edad: 26, sexo: "Femenino", telefono: "38855264" }
];

const tablaContainer = document.getElementById("tablaContainer");
const tabla = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

const encabezados = ["Nombre", "Apellido", "Edad", "Sexo", "Teléfono"];

const encabezadoRow = document.createElement("tr");
encabezados.forEach(encabezado => {
  const th = document.createElement("th");
  th.textContent = encabezado;
  encabezadoRow.appendChild(th);
});
thead.appendChild(encabezadoRow);

data.forEach(persona => {
  const fila = document.createElement("tr");
  Object.values(persona).forEach(valor => {
    const celda = document.createElement("td");
    celda.textContent = valor;
    fila.appendChild(celda);
  });
  tbody.appendChild(fila);
});

tabla.appendChild(thead);
tabla.appendChild(tbody);
tablaContainer.appendChild(tabla);