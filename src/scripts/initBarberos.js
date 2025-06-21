import { collection, addDoc, db } from '../firabase';

const barberos = [
  {
    nombre: "Carlos Mendoza",
    correo: "carlos",
    contraseña: "12345",
    especialidad: "Experto en cortes modernos",
    experiencia: "8 años",
    tipo: "barbero",
    imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
    descripcion: "Especialista en tendencias actuales y técnicas de vanguardia."
  },
  {
    nombre: "Luis Ramírez",
    correo: "luis",
    contraseña: "12345",
    especialidad: "Barbas y diseños personalizados",
    experiencia: "6 años",
    tipo: "barbero",
    imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60",
    descripcion: "Maestro en el arte del diseño y perfilado de barbas."
  },
  {
    nombre: "Daniel Torres",
    correo: "daniel",
    contraseña: "12345",
    especialidad: "Clásico con técnica tradicional",
    experiencia: "10 años",
    tipo: "barbero",
    imagen: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60",
    descripcion: "Experto en técnicas tradicionales y cortes clásicos."
  }
];

async function initBarberos() {
  try {
    for (const barbero of barberos) {
      await addDoc(collection(db, 'barberos'), barbero);
      console.log(`Barbero ${barbero.nombre} agregado exitosamente`);
    }
    console.log('Todos los barberos han sido agregados');
  } catch (error) {
    console.error('Error al agregar barberos:', error);
  }
}

initBarberos(); 