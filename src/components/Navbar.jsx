import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../app/api/auth/[...nextauth]/route';
import './styles.css';

async function Navbar() {
  const session = await getServerSession(authOptions);
  const image = 'https://proyectotopicos22.000webhostapp.com/anime.jpg';

  console.log(session);

  const tipo = session?.user?.tipo || null;
  console.log(tipo);

  return (
    <nav className='flex justify-between text-white px-24 items-center py-3 navCss'>
      <img src={image} width={50} height={50} className='imgT' />
      <h2 className='text-4xl font-bold '>EducaTec</h2>
      <ul className='flex gap-x-2'>
        {!session?.user ? (
          <>
            <li>
              <Link className="nuevo" href="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="nuevo" href="/auth/login">
                Iniciar sesión
              </Link>
            </li>
            <li>
              <Link className="nuevo" href="/auth/register">
                Registrarse
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="nuevo" href="/dashboard">
                Cursos
              </Link>
            </li>
            <li>
              <Link className="nuevo" href="/api/auth/signout">
                Salir Cuenta
              </Link>
            </li>
            
            
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
