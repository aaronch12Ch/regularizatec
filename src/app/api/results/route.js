import { NextResponse } from 'next/server';
import prisma from '../../../../libs/prisma';

export async function GET() {
  try {
    const results = await prisma.result.findMany({
      include: {
        user: true,
      },
    });

    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error fetching results:', error);
    return NextResponse.json({ message: 'Failed to fetch results' }, { status: 500 });
  }
}
