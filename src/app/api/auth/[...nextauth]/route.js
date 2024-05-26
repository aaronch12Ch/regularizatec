// import NextAuth from "next-auth";
// import CredentialsProvider from 'next-auth/providers/credentials';
// import db from '../../../../libs/db';
// import bcrypt from 'bcrypt';

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "user@email.com" },
//         password: { label: "Password", type: "password", placeholder: "******" },
//       },
//       async authorize(credentials, req) {
//         const userFound = await db.user.findUnique({
//           where: {
//             email: credentials.email,
//           },
//         });

//         if (!userFound) throw new Error("No user found");

//         const matchPassword = await bcrypt.compare(credentials.password, userFound.password);
//         if (!matchPassword) throw new Error("Wrong password");

//         return {
//           tipo: userFound.tipo,
//           id: userFound.id,
//           name: userFound.username,
//           email: userFound.email,
//         };
//       },
//     }),
//   ],
//   callbacks: {
//     async session({ session, token }) {
//       // Ensure session.user is defined
//       session.user = session.user || {};
//       session.user.tipo = token.tipo;
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.tipo = user.tipo;
//       }
//       return token;
//     },
//   },
//   pages: {
//     signIn: '/auth/login',
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
// pages/api/auth/[...nextauth].js
// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import db from '../../../../libs/db';
import bcrypt from 'bcrypt';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'user@email.com' },
        password: { label: 'Password', type: 'password', placeholder: '******' },
      },
      async authorize(credentials, req) {
        const userFound = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!userFound) throw new Error('No user found');

        const matchPassword = await bcrypt.compare(credentials.password, userFound.password);
        if (!matchPassword) throw new Error('Wrong password');

        return {
          tipo: userFound.tipo,
          id: userFound.id,
          name: userFound.username,
          email: userFound.email,
          registro_completo: userFound.registro_completo,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = session.user || {};
      session.user.tipo = token.tipo;
      session.user.id = token.id;
      session.user.registro_completo = token.registro_completo;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.tipo = user.tipo;
        token.registro_completo = user.registro_completo;
        token.id =user.id;
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
