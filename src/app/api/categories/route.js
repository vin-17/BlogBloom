import { PrismaClient } from '@prisma/client'; // Import PrismaClient from the correct package
import { NextResponse } from 'next/server';

const prisma = new PrismaClient(); // Create a new instance of PrismaClient

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();

    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    console.error(err); // Use console.error for errors
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), {
      status: 500
    });
  }
};