// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

const li = document.getElementsById("lista-de-productos");//se corrige la estructura del metodo para que sea get.ElementById para agregar el id
const $i = document.querySelector('input'); //se corrige la const con un document.query.Selector para la clase input


//Se cambia la funcion para mostrar los productos
const mostrarProductos = (productos) => {
for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div");
  d.classList.add("producto");

  var ti = document.createElement("p");
  ti.classList.add("titulo");
  ti.textContent = productos[i].nombre;
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}

};

//Se llama a la funcion para mostrar los productos

mostrarProductos(productos);
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);

  //Se modifica a la funcion para mostrar los productos y evitar errores en el código

  if (texto === ""){
    mostrarProductos(productos);
    return;
  }

  const productosFiltrados = filtrado(productos, texto);
  mostrarProductos(productosFiltrados);
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  