const btnCarrito = document.getElementById("btn-carrito");
const spanMostrarEsconderCarrito = document.getElementById("mostrar-esconder-carrito");
const carrito = document.getElementById("carrito");
const contenedorProductos = document.getElementById("contenedor-productos");
const subtotal = document.getElementById("subtotal");
const impuestos = document.getElementById("impuestos");
const total = document.getElementById("total");
const totalItems = document.getElementById("total-items");
const limpiarCarrito = document.getElementById("limpiar-carrito");
const contenedorProducto = document.getElementById("contenedor-producto");

const productos = [
   {
      id: 1,
      nombre: "Aceite de Oliva 250ml.",
      precio: 27.800,
      categoria: "Aceites",
   },
   {
      id: 2,
      nombre: "Aceite de Girasol 900ml.",
      precio: 19.200,
      categoria: "Aceites",
   },
   {
      id: 3,
      nombre: "Aceite de Oliva 900ml.",
      precio: 36.500,
      categoria: "Aceites",
   },
   {
      id: 4,
      nombre: "Cepillo Dental",
      precio: 4.900,
      categoria: "Higiene Oral",
   },
   {
      id: 5,
      nombre: "Crema Dental 75ml.",
      precio: 17.300,
      categoria: "Higiene Oral",
   },
   {
      id: 6,
      nombre: "Enjuague Bucal 500ml.",
      precio: 19.700,
      categoria: "Higiene Oral",
   },
   {
      id: 7,
      nombre: "Detergente Líquido Regular 2840ml.",
      precio: 66.900,
      categoria: "Detergentes",
   },
   {
      id: 8,
      nombre: "Detergente Polvo Triple Poder 4000g.",
      precio: 57.600,
      categoria: "Detergentes",
   },
   {
      id: 9,
      nombre: "Barra de Jabón Azul 300g.",
      precio: 9.350,
      categoria: "Detergentes",
   },
   {
      id: 10,
      nombre: "Menta Helada 100 unidades",
      precio: 8.950,
      categoria: "Confitería",
   },
   {
      id: 11,
      nombre: "Gomas Sour 72g.",
      precio: 2.100,
      categoria: "Confitería",
   },
   {
      id: 12,
      nombre: "Chocolatina Crujiente 28g.",
      precio: 4.600,
      categoria: "Confitería",
   },
   {
      id: 13,
      nombre: "Papas Rizadas Mayonesa 25g.",
      precio: 900,
      categoria: "Pasabocas",
   },
   {
      id: 14,
      nombre: "Nachos sabor Queso 190g.",
      precio: 6.150,
      categoria: "Pasabocas",
   },
   {
      id: 15,
      nombre: "Papas sabor Natural 25g.",
      precio: 1.950,
      categoria: "Pasabocas",
   },
]