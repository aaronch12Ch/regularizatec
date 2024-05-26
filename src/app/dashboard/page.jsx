"use client"
import Link from 'next/link'
import './styles.css'
import "@madzadev/audio-player/dist/index.css";
function DashboardPage() {
  return (
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <div >
          
        <h1 className="text-white text-5xl">Cursos disponibles</h1>
        <ul className="text-white p-5">
          <>
          <li className='nuevo3'>
              <Link className="text-teal-50	 text-3xl  " href="/dashboard/mate1">
                Cálculo Diferencial e Integral  
              </Link>
          </li>
          <li className='nuevo3'><Link className="text-teal-50	 text-3xl " href="/dashboard/mate1">Matematicas 2 </Link></li>
          <li className='nuevo3'><Link className="text-teal-50	 text-3xl " href="/dashboard/naruto">My Hero Academy</Link></li>
          <li className='nuevo3'><Link className="text-teal-50	 text-3xl " href="/dashboard/naruto">Bleach</Link></li>
          <li className='nuevo3'><Link className="text-teal-50	 text-3xl " href="/dashboard/naruto">Dragon Ball z</Link></li>
          </>
        </ul>
            
        </div>
    </section>
  )
}
export default DashboardPage;