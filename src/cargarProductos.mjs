// cargarProductos.js
import 'dotenv/config';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, writeBatch } from "firebase/firestore";

// Configuración de Firebase (desde tu .env o directamente aquí)
const firebaseConfig = {
  apiKey: "AIzaSyAFdak8HtCl6DEAFkgmePTUAV_xCvs1NPg",
  authDomain: "lenceria-online-ae088.firebaseapp.com",
  projectId: "lenceria-online-ae088",
  storageBucket: "lenceria-online-ae088.appspot.com",
  messagingSenderId: "940263604464",
  appId: "1:940263604464:web:dd16f85d7ed9d84f9c0235",
  measurementId: "G-R1ZS0M0TFJ"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Productos de ejemplo
const productos = [
  { nombre: "Conjunto Encaje Negro", precio: 1200, talle: "M", categoria: "Ropa interior", stock: 10, imagen: "/images/conjunto_negro.jpg" },
  { nombre: "Bralette Rojo", precio: 950, talle: "S", categoria: "Ropa interior", stock: 15, imagen: "/images/bralette_rojo.jpg" },
  { nombre: "Bombacha Encaje Azul", precio: 700, talle: "L", categoria: "Ropa interior", stock: 20, imagen: "/images/bombacha_azul.jpg" },
  { nombre: "Body Negro Sexy", precio: 1500, talle: "M", categoria: "Ropa interior", stock: 8, imagen: "/images/body_negro.jpg" },
  { nombre: "Conjunto Push Up Rosa", precio: 1300, talle: "S", categoria: "Ropa interior", stock: 12, imagen: "/images/conjunto_rosa.jpg" },
  { nombre: "Bralette Verde", precio: 980, talle: "M", categoria: "Ropa interior", stock: 18, imagen: "/images/bralette_verde.jpg" },
  { nombre: "Bombacha Encaje Blanca", precio: 750, talle: "L", categoria: "Ropa interior", stock: 25, imagen: "/images/bombacha_blanca.jpg" },
  { nombre: "Body Rojo", precio: 1550, talle: "S", categoria: "Ropa interior", stock: 7, imagen: "/images/body_rojo.jpg" },
  { nombre: "Conjunto Satén Negro", precio: 1400, talle: "M", categoria: "Ropa interior", stock: 9, imagen: "/images/conjunto_saten.jpg" },
  { nombre: "Bralette Azul", precio: 920, talle: "L", categoria: "Ropa interior", stock: 20, imagen: "/images/bralette_azul.jpg" }
];

async function cargarProductos() {
  try {
    const batch = writeBatch(db);
    const productosCol = collection(db, "productos");

    productos.forEach(prod => {
      const docRef = doc(productosCol); // ID automático
      batch.set(docRef, prod);
    });

    await batch.commit();
    console.log("✅ Productos cargados correctamente");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error al cargar productos:", error);
    process.exit(1);
  }
}

cargarProductos();
