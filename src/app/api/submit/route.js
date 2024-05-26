import { NextResponse } from 'next/server';
import db from '../../../libs/db';

export const config = {
  api: {
    bodyParser: true,
  },
};

export async function POST(req) {
  const body = await req.json();
  const { answers, userId } = body;

  try {
    const resultData = Object.values(answers).map((answer) => ({
      answer: answer.answer,
      isCorrect: answer.answer === answer.correctAnswer,
      procedure: answer.procedure,
      userId: session.user.id,
    }));

    await db.result.createMany({ data: resultData });

    return NextResponse.json({ message: 'Answers submitted successfully' });
  } catch (error) {
    console.error('Error submitting answers:', error);
    return NextResponse.json({ message: 'Failed to submit answers' }, { status: 500 });
  }
}
