import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function handleAttendance(req, res) {
  try {
    if (req.method === "POST") {
      const { userId, qrCode } = req.body;
      const [teacherId, scheduleId, timestamp] = qrCode.split("-");
      const now = new Date();

      const schedule = await prisma.materia_Maestros.findFirst({
        where: {
          id: parseInt(scheduleId),
          maestro_id: parseInt(teacherId),
          dia: now.toLocaleDateString("en-US", { weekday: "long" }),
          horaInicio: {
            lte: now,
          },
          horaFin: {
            gte: now,
          },
        },
      });

      if (!schedule) {
        return res.status(400).json({ error: "QR code no válido o fuera del horario de clase" });
      }

      const asistencia = await prisma.asistencia.create({
        data: {
          qrCode,
          dia: now,
          maestro_id: parseInt(teacherId),
          materia_id: schedule.id_Mate,
          alumno_id: parseInt(userId),
        },
      });

      res.status(200).json(asistencia);
    } else {
      res.status(405).json({ error: "Método no permitido" });
    }
  } catch (error) {
    console.error("Error en la función:", error);
    res.status(500).json({ error: "Hubo un error en el servidor" });
  } finally {
    await prisma.$disconnect();
  }
}

export default handleAttendance;
