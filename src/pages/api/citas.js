export const prerender = false;

// Asegúrate de que db esté correctamente importado desde tu firabase.js
import { collection, addDoc, getFirestore, Timestamp } from "../../firabase";
import { db } from "../../firabase";

export async function POST({ request }) {
  const data = await request.json();

  // Validación básica de campos obligatorios
  if (
    !data.nombre ||
    !data.telefono ||
    !data.paquete ||
    !data.barbero ||
    !data.fecha ||
    !data.hora
  ) {
    return new Response(
      JSON.stringify({ error: "Faltan datos obligatorios" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    await addDoc(collection(db, "citas"), {
      ...data,
      timestamp: Timestamp ? Timestamp.now() : new Date().toISOString(),
    });
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "No se pudo guardar la cita" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
