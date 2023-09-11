import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, username, password, confirmPassword } = body;
  // username validation
  if (username.length < 3) {
    return NextResponse.json("Username needs to be over 3 characters", {
      status: 400,
    });
  }

  if (username.length > 30) {
    return NextResponse.json("Username needs to be below 30 characters", {
      status: 400,
    });
  }

  const usernameExists = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (usernameExists) {
    return NextResponse.json("Username already exists", { status: 400 });
  }

  // email validation
  if (!email.includes("@")) {
    return NextResponse.json("Email has to include @", { status: 400 });
  }
  if (!email.includes(".")) {
    return NextResponse.json("Email has to include .", { status: 400 });
  }

  if (email.length < 3) {
    return NextResponse.json("Not a valid email", { status: 400 });
  }

  const emailExists = await prisma.newsletter.findUnique({
    where: {
      email: email,
    },
  });

  if (emailExists) {
    return NextResponse.json("Youre email is already signed up", {
      status: 400,
    });
  }
  //password validation
  if (password !== confirmPassword) {
    return NextResponse.json("Passwords dont match", { status: 400 });
  }
  if (password.length < 8 || password.length > 40) {
    return NextResponse.json("Password needs to be over 8 characters long", {
      status: 400,
    });
  }
  //hash pw
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      username,
      hashedPassword,
    },
  });

  return NextResponse.json("Successfully signed up", { status: 200 });
}
