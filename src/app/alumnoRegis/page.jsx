// pages/alumnoRegis.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';

export default function AlumnoRegis() {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const session = await getSession();
    const res = await fetch('/api/completeRegistration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: session.user.email,
        tipo: 'alumno',
        ...formData,
      }),
    });
    if (res.ok) {
      router.push('/dashboard');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Tus campos del formulario */}
      <button type="submit">Completar Registro</button>
    </form>
  );
}
