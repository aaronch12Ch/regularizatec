"use client";

import {useForm} from 'react-hook-form';
import {signIn} from 'next-auth/react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './styles.css';





 function LoginPage() {

  const {register,handleSubmit,formState:{errors}} = useForm();

  const [error,setError] = useState(null);
  const router=useRouter();
 
  
  const onSubmit = handleSubmit(async (data) => {
    try {
      
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false
      });
      
      
     
      if (res.error) {
        setError(res.error);
      } else {
          router.push('/dashboard');
        
        
        router.refresh();
      }
    } catch (error) {
      setError(error.message);
    }
  });

  // Utilizamos useSWR para obtener el tipo de usuario
  
  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <form action=""  onSubmit={onSubmit}  className='w-1/4 transP bg-white'>

        {error &&(
          <p className='bg-red-500 text-lg text-white p-3 rounded'>{error}</p>
        )}
      <div className='flex justify-center items-center'>
        <h1 className='text-black font-bold text-4xl mb-4 '>Iniciar sesión</h1>
      </div>
      <label htmlFor="email" className='text-black mb-2 block text-base font-bold'>Correo:</label>
            <input type="email" 
            {...register("email",
                {
                    required:{
                        value:true,
                        message:'Email is required'
                    }
                })}
                placeholder='Correo requerido'
                className='p-3 rounded block mb-2  bg-cyan-100 text-black w-full'
            />
            {
                errors.email &&(
                    <span className='text-red-500 text-xs'>{errors.email.message}</span>
                )
            }
            <label htmlFor="password" className='text-black mb-2 block text-base font-bold'>Contraseña:</label>
            <input type="password" 
            {...register("password",
            {
                required:{
                    value:true,
                    message:"Password is required"
                }
            })}
            placeholder='*******'
            className='p-3 rounded block mb-2  bg-cyan-100 text-black w-full'
            />
            
            {
                errors.password &&(
                    <span className='text-red-500 text-xs'>{errors.password.message}</span>
                )
            }

            <button className='w-full colorButon text-white  mt-7 p-3 rounded-lg
            transition ease-in-out delay-400  bg-cyan-500 hover:-translate-y-2 hover:scale-200 hover:bg-sky-400 duration-500 font-bold '>Ingresar</button>
      </form>
    </div>
  )
}
export default LoginPage
