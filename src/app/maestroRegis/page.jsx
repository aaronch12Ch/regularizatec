"use client";
import './styles.css'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';

export default function MaestroRegis() {
    const {register,handleSubmit,formState:{errors}} = useForm();
    
    const router =useRouter();

    const onSubmit= handleSubmit(async (data)=>{

        if(data.password !== data.confirmPassword){
            return alert("Password no coinciden")
        }
        
       const res =await fetch('/api/completaRegistro/completaRegistro',{
            method:'POST',
            body:JSON.stringify({
                id_maestro: data.id_maestro,
                nombre: data.nombre,
                apellido:data.apellido,
                tipoId: data.tipoId,
               
                
            }),
            headers:{
                'Content-Type':'application/json'
            }

        })
        
        if(res.ok){
            router.push('../../auth/login')

        }
    })
    return(
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-1/4 transP bg-white'>
       
        <div className='flex justify-center items-center'>
          <h1 className='text-black font-bold text-4xl mb-4'>Registro Maestro</h1>
        </div>
        <label htmlFor='id_maestro' className='text-black mb-2 block text-base font-bold'>Id maestro:</label>
        <input
          type='text'
          {...register('id_maestro', { required: 'Id maestro requerido' })}
          placeholder='Id maestro requerido'
          className='p-3 rounded block mb-2 bg-cyan-100 text-black w-full'
        />
        {errors.id_maestro && <span className='text-red-500 text-xs'>{errors.id_maestro.message}</span>}
        <label htmlFor='nombre' className='text-black mb-2 block text-base font-bold'>Nombre:</label>
        <input
          type='text'
          {...register('nombre', { required: 'Nombre requerido' })}
          placeholder='Nombre requerido'
          className='p-3 rounded block mb-2 bg-cyan-100 text-black w-full'
        />
        {errors.nombre && <span className='text-red-500 text-xs'>{errors.nombre.message}</span>}
        <label htmlFor='apellido' className='text-black mb-2 block text-base font-bold'>Apellido:</label>
        <input
          type='text'
          {...register('apellido', { required: 'Apellido requerido' })}
          placeholder='Apellido requerido'
          className='p-3 rounded block mb-2 bg-cyan-100 text-black w-full'
        />
        {errors.apellido && <span className='text-red-500 text-xs'>{errors.apellido.message}</span>}
        <label htmlFor='tipoId' className='text-black mb-2 block text-base font-bold'>Tipo Id:</label>
        <input
          type='text'
          {...register('tipoId', { required: 'Tipo Id requerido' })}
          placeholder='Tipo Id requerido'
          className='p-3 rounded block mb-2 bg-cyan-100 text-black w-full'
        />
        {errors.tipoId && <span className='text-red-500 text-xs'>{errors.tipoId.message}</span>}
        <button
          type='submit'
          className='w-full colorButon text-white mt-7 p-3 rounded-lg transition ease-in-out delay-400 bg-cyan-500 hover:-translate-y-2 hover:scale-200 hover:bg-sky-400 duration-500 font-bold'
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}
