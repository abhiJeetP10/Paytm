import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@repo/db";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({
      user,
      account,
    }: {
      user: { email?: string | null | undefined; name?: string | undefined };
      account: { provider?: "google" | "github" | undefined };
    }) {
      console.log("hi signin");
      if (!user || !user.email) {
        return false;
      }

      await prisma.merchant.upsert({
        select: {
          id: true,
        },
        where: {
          email: user.email,
        },
        create: {
          email: user.email,
          name: user.name || "",
          auth_type: account.provider === "google" ? "Google" : "Github", // Use a prisma type here
        },
        update: {
          name: user.name || "",
          auth_type: account.provider === "google" ? "Google" : "Github", // Use a prisma type here
        },
      });

      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "secret",
};
