import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();
export const GET = async (req: NextRequest) => {
  const posts = await prisma.post.findMany({});
  return NextResponse.json({ posts });
};

// menambahkan logic create data
export const POST = async (req: NextRequest) => {
  const { title, content } = await req.json();

  const post = await prisma.post.create({
    data: {
      title,
      content,
    },
  });

  return NextResponse.json({ post });
};

export const DELETE = async (req: NextRequest) => {
  const url = new URL(req.url).searchParams;
  const id = Number(url.get('url'));

  const post = await prisma.post.delete({
    where: {
      id: id,
    },
  });
  if (!post) {
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
  return NextResponse.json({});
};
