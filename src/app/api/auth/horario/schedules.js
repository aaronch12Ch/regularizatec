import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import db from '../../../../libs/db';
import bcrypt from 'bcrypt';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        nombre: { label: "nombre", type: "text", placeholder: "aaron" },
        apellido: { label: "apellido", type: "text", placeholder: "******" },
      },
      async authorize(credentials, req) {
        const userFound = await db.maestros.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!userFound) throw new Error("No user found");

        const matchPassword = await bcrypt.compare(credentials.password, userFound.password);
        if (!matchPassword) throw new Error("Wrong password");

        return {
          tipo: userFound.tipo,
          id: userFound.id,
          name: userFound.username,
          email: userFound.email,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Ensure session.user is defined
      session.user = session.user || {};
      session.user.tipo = token.tipo;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.tipo = user.tipo;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };