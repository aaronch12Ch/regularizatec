import { NextResponse } from "next/server";
import db from '../../../libs/db';

export async function POST(request) {
    try {
        const data = await request.json();

        // Comprueba si el maestro ya existe en la base de datos
        const userFound = await db.maestros.findUnique({
            where: {
                id_maestro: data.id_maestro
            }
        });

        if (userFound) {
            return NextResponse.json({
                message: "Maestro already exists"
            }, {
                status: 400
            });
        }

        // Crea un nuevo maestro si no existe
        const newMaestro = await db.maestros.create({
            data: {
                id_maestro: data.id_maestro,
                nombre: data.nombre,
                apellido: data.apellido,
                registro_completo: "1",
                tipoId:data.tipoId // Ajusta esto según tu modelo
            }
        });

        const { id_maestro, ...maestro } = newMaestro;

        return NextResponse.json(maestro);
    } catch (error) {
        console.error("Error in API:", error);
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        });
    }
}
