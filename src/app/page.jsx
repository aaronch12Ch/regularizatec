

import './globals.css'

function HomePage() {

 

  return (<>
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <div >
          <h1 className="text-white text-8xl nuevo2  ">EducaTec</h1>
        
        <div className="flex justify-center items-center">
        <p className=" text-white text-6xl mt-4 ppod animate-bounce">La educación es el futuro</p>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto p-6 bg-sky-200 shadow-lg rounded-lg mt-12 mb-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Regularización en Cálculo Integral, Diferencial, Vectorial y Ecuaciones Diferenciales</h1>
      <p className="mb-4 text-gray-700">
        Bienvenido a nuestra plataforma de regularización académica, donde te ofrecemos el apoyo necesario para que puedas dominar las materias de cálculo integral, diferencial, vectorial y ecuaciones diferenciales. Sabemos que estas disciplinas pueden resultar desafiantes, pero con la guía adecuada, estamos seguros de que podrás alcanzar tus objetivos académicos.
      </p>
      <h2 className="text-2xl font-semibold mb-3 text-blue-500">¿Qué ofrecemos?</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-blue-400">Cálculo Diferencial:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Introducción a las derivadas y sus aplicaciones.</li>
            <li>Métodos de diferenciación.</li>
            <li>Teoremas fundamentales del cálculo diferencial.</li>
            <li>Aplicaciones prácticas en problemas de optimización y modelado.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-400">Cálculo Integral:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Conceptos básicos de la integración.</li>
            <li>Técnicas de integración.</li>
            <li>Integrales definidas e indefinidas.</li>
            <li>Aplicaciones de la integral en áreas, volúmenes y otros problemas geométricos.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-400">Cálculo Vectorial:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Vectores y sus propiedades.</li>
            <li>Derivadas parciales y gradientes.</li>
            <li>Integrales de línea y de superficie.</li>
            <li>Teoremas importantes como el de Green, Gauss y Stokes.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-400">Ecuaciones Diferenciales:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Introducción a las ecuaciones diferenciales ordinarias (EDO).</li>
            <li>Métodos de solución de EDO de primer y segundo orden.</li>
            <li>Sistemas de ecuaciones diferenciales.</li>
            <li>Aplicaciones en física, ingeniería y otras ciencias.</li>
          </ul>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-500">¿Cómo funciona nuestro servicio?</h2>
      <p className="text-gray-700">
        Ofrecemos una variedad de servicios para adaptarnos a tus necesidades:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><span className="font-semibold">Clases Personalizadas:</span> Ofrecemos sesiones de tutoría individualizadas para abordar tus dudas específicas y avanzar a tu propio ritmo.</li>
        <li><span className="font-semibold">Material Didáctico:</span> Accede a una amplia variedad de recursos, como guías de estudio, ejercicios resueltos y exámenes de práctica.</li>
        <li><span className="font-semibold">Asesoría Continua:</span> Nuestros expertos están disponibles para brindarte soporte continuo y ayudarte a preparar tus exámenes y proyectos.</li>
        <li><span className="font-semibold">Flexibilidad Horaria:</span> Adaptamos nuestros horarios para que puedas combinar tus estudios con otras responsabilidades.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-500">¿Por qué elegirnos?</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><span className="font-semibold">Expertos Calificados:</span> Nuestro equipo está compuesto por profesionales con amplia experiencia en la enseñanza de estas materias.</li>
        <li><span className="font-semibold">Resultados Comprobados:</span> Muchos de nuestros estudiantes han logrado mejorar significativamente sus calificaciones y comprensión de los temas.</li>
        <li><span className="font-semibold">Enfoque Práctico:</span> Nos centramos en aplicaciones prácticas para que puedas ver la relevancia de lo que estás aprendiendo en situaciones reales.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-500">Inscripción y Contacto</h2>
      <p className="text-gray-700 mb-4">
        Para inscribirte en nuestros programas de regularización o para obtener más información, no dudes en ponerte en contacto con nosotros. Puedes hacerlo a través de nuestro formulario en línea, correo electrónico o número de teléfono. Estamos aquí para ayudarte a superar tus desafíos académicos y alcanzar tus metas educativas.
      </p>
      
    </div>
    </>
  )
}

export default HomePage