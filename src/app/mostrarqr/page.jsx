import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../app/api/auth/[...nextauth]/route';
import axios from "axios";

// Importa la función getSchedules desde tu archivo donde está definida
import getSchedules from '../src/app/api/auth/horario/schedules';

export default function Mostrarqr() {
  const { data: session } = useSession();
  const [qrCode, setQrCode] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  // Llama a la función getSchedules para obtener los horarios del maestro
  useEffect(() => {
    if (session) {
      getSchedules({ query: { maestroId: session.user.id } })
        .then(response => {
          setSchedules(response.data);
        })
        .catch(error => {
          console.error("Error al obtener los horarios:", error);
          // Maneja el error si es necesario
        });
    }
  }, [session]);

  const generateQrCode = () => {
    if (selectedSchedule) {
      const code = `${session.user.id}-${selectedSchedule.id}-${Date.now()}`;
      setQrCode(code);
    } else {
      alert("Por favor seleccione un horario de clase");
    }
  };

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Bienvenido, {session.user.username}</h1>
      <h2>Generar Código QR para la Asistencia</h2>
      <select onChange={(e) => setSelectedSchedule(JSON.parse(e.target.value))}>
        <option value="">Seleccione un horario</option>
        {schedules.map(schedule => (
          <option key={schedule.id} value={JSON.stringify(schedule)}>
            {schedule.dia} {new Date(schedule.horaInicio).toLocaleTimeString()} - {new Date(schedule.horaFin).toLocaleTimeString()}
          </option>
        ))}
      </select>
      <button onClick={generateQrCode}>Generar Código QR</button>
      {qrCode && (
        <div>
          <QRCode value={qrCode} />
          <p>{qrCode}</p>
        </div>
      )}
    </div>
  );
}
