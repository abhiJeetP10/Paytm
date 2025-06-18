import { NextResponse } from "next/server";
import { prisma } from "@repo/db";

export const GET = async () => {
  await prisma.user.create({
    data: {
      email: "asd",
      name: "adsads",
      number: "1234567890",
      password: "yourPassword123",
    },
  });
  return NextResponse.json({
    message: "hi there",
  });
};
