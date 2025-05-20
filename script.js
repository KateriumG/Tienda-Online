let carrito = [];
let total = 0;

function agregarAlCarrito(nombreProducto, precioProducto) {
  const producto = {
    nombre: nombreProducto,
    precio: precioProducto
  };
  carrito.push(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
  const listaCarrito = document.getElementById('listaCarrito');
  const totalPagar = document.getElementById('totalPagar');
  listaCarrito.innerHTML = '';
  total = 0;

  carrito.forEach((producto) => {
    total += producto.precio;
    const item = document.createElement('div');
    item.className = 'item-carrito';
    item.innerHTML = `
      <span>${producto.nombre}</span>
      <span>$${producto.precio}</span>
      <button class="eliminar" style="
      padding: 5px 9px;
      background-color: rgb(186, 46, 43);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s ease, transform 0.2;
      " onclick="eliminarProducto('${producto.nombre}')">Eliminar</button>
    `;
    listaCarrito.appendChild(item);
  });

  totalPagar.textContent = total;
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert('El carrito está vacío');
    return;
  }

  alert(`Gracias por tu compra. Total a pagar: $${total}`);
  carrito = [];
  actualizarCarrito();
}

function eliminarItems(){
  carrito = [];
  actualizarCarrito();
}

function eliminarProducto(pr) {
  carrito = carrito.filter(producto => producto.nombre !== pr);
  actualizarCarrito();
}