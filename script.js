let carrito = [];
let total = 0;
let carritoalt = [];

function agregarAlCarrito(nombreProducto, precioProducto) {
  const producto = {
    nombre: nombreProducto,
    precio: precioProducto
  };
  carrito.push(producto);
  carritoalt.push(producto.nombre);
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

function eliminarItem(){
  carrito.pop();
  actualizarCarrito();
}