import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;
  // Validate if it's a correct email
  if (!email.includes("@")) {
    return NextResponse.json("email has to include @", { status: 400 });
  }
  if (!email.includes(".")) {
    return NextResponse.json("email has to include .", { status: 400 });
  }

  if (email.length < 3) {
    return NextResponse.json("not a valid email", { status: 400 });
  }

  const emailExists = await prisma.newsletter.findUnique({
    where: {
      email: email,
    },
  });

  if (emailExists) {
    return NextResponse.json("youre already signed up", { status: 400 });
  }

  await prisma.newsletter.create({
    data: {
      email: email,
    },
  });

  return NextResponse.json("Successfully signed up for newsletter", {
    status: 200,
  });
}
