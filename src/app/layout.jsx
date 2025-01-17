import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import './globals.css';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../app/api/auth/[...nextauth]/route';

const inter = Inter({ subsets: ['latin'] });

// Cargar SessionProviderWrapper dinámicamente en el cliente
const DynamicSessionProviderWrapper = dynamic(() => import('../components/SessionProviderWrapper'), {
  ssr: false,
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="es">
      <body className={inter.className}>
        <DynamicSessionProviderWrapper session={session}>
          <Navbar />
          {children}
        </DynamicSessionProviderWrapper>
      </body>
    </html>
  );
}
