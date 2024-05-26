"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import axios from "axios";

export default function Escanearqr() {
  const { data: session, status } = useSession();
  const [qrCode, setQrCode] = useState("");

  const handleScan = async () => {
    try {
      const response = await axios.post("/src/app/api/auth/assistencia/attendance", {
        userId: session.user.id,
        qrCode: qrCode
      });
      alert("Asistencia registrada con éxito");
    } catch (error) {
      alert("Error al registrar la asistencia: " + error.response.data.error);
    }
  };

  if (status === "loading") {
    return <p>Cargando...</p>;
  }

  if (!session) {
    return <p>Inicie sesión para escanear el código QR</p>;
  }

  return (
    <div>
      <h1>Bienvenido, {session.user.username}</h1>
      <p>Escanee el código QR proporcionado por su maestro</p>
      <input
        type="text"
        placeholder="Ingrese el código QR"
        value={qrCode}
        onChange={(e) => setQrCode(e.target.value)}
      />
      <button onClick={handleScan}>Registrar Asistencia</button>
    </div>
  );
}
