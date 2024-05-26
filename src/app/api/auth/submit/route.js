import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    const { answers } = req.body;

    try {
      const result = await prisma.answer.create({
        data: {
          userId: session.user.id,
          answers,
        },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error saving answers' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
