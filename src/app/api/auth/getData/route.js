import db from '@/libs/db';

export default async function getUserByEmail(email) {
  try {
    const user = await db.user.findUnique({
      where: {
        email: email
      }
    });

    if (!user) {
      throw new Error('Usuario no encontrado para el correo electrónico proporcionado');
    }

    return user;
  } catch (error) {
    throw new Error('Error al obtener usuario por correo electrónico: ' + error.message);
  }
}

