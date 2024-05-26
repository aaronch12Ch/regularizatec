"use client"
import './styles.css'
import React from 'react'
import {useForm} from 'react-hook-form'
import {useRouter} from 'next/navigation';
function RegisterPage() {
    const {register,handleSubmit,formState:{errors}} = useForm();

    const router =useRouter();

    const onSubmit= handleSubmit(async (data)=>{

        if(data.password !== data.confirmPassword){
            return alert("Password no coinciden")
        }
        
       const res =await fetch('/api/auth/register',{
            method:'POST',
            body:JSON.stringify({
                username: data.username,
                email: data.email,
                tipo:data.tipo,
                password: data.password,
                
            }),
            headers:{
                'Content-Type':'application/json'
            }

        })
        
        if(res.ok){
            router.push('../../auth/login')

        }
    })

  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center' >
        <form action="" onSubmit={onSubmit} className='w-1/4 transP'>
            <div className='flex justify-center items-center'>
                <h1 className='text-black font-bold text-4xl mb-4'>Registrarse</h1>
            </div>

            <label htmlFor="username" className='text-black mb-2 block text-base font-bold'>Nombre:</label>
            <input type="text" 
            {...register("username",
                {
                    required:{
                        value:true,
                        message:'Username is required'
                    }
                })}
                placeholder='Tu nombre'
                className='p-3 rounded block mb-2   bg-cyan-100 text-black w-full'
            />
            {
                errors.username &&(
                    <span className='text-red-500 text-xs'>{errors.username.message}</span>
                )
            }

            <label htmlFor="email" className='text-black mb-2 block text-base font-bold'>Correo:</label>
            <input type="email"
                {...register("email",
                {
                required:{
                    value:true,
                    message:"Email is required"
                }
                })}
                placeholder='user@email.com'
                className='p-3 rounded block mb-2  bg-cyan-100 text-black w-full'
             />
            {
                errors.email &&(
                    <span className='text-red-500 text-xs'>{errors.email.message}</span>
                )
            }

            <label htmlFor="tipo" className='text-black mb-2 block text-base font-bold'>Tipo:</label>
            <select
                    {...register("tipo", {
                        required: {
                            value: true,
                            message: "Tipo is required"
                        }
                    })}
                    className='p-3 rounded block mb-2 bg-cyan-100 text-black w-full'
                >
                    <option value="">Seleccione una opción</option>
                    <option value="1">Maestro</option>
                    <option value="2">Alumno</option>
                    <option value="3">Administrativo</option>
                </select>
                {errors.tipo && (
                    <span className='text-red-500 text-xs'>{errors.tipo.message}</span>
                )}


            <label htmlFor="password" className='text-black mb-2 block text-base font-bold'>Password:</label>
            <input type="password" 
            {...register("password",
            {
                required:{
                    value:true,
                    message:"Password is required"
                }
            })}
            placeholder='*******'
            className='p-3 rounded block mb-2   bg-cyan-100 text-black w-full'
            />
            {
                errors.password &&(
                    <span className='text-red-500 text-xs'>{errors.password.message}</span>
                )
            }

            <label htmlFor="confirmPassword" className='text-black mb-2 block text-base font-bold'>Confirmar Password:</label>
            <input type="password"
            {...register("confirmPassword",
            {
            required:{
                value:true,
                message:"Confirm Password is required"
                }
            })} 
            placeholder='*******'
            className='p-3 rounded block mb-2  bg-cyan-100 text-black w-full'
            />
            {
                errors.confirmPassword &&(
                    <span className='text-red-500 text-xs'>{errors.confirmPassword.message}</span>
                )
            }

            <button className='w-full  text-white p-3 rounded-lg mt-2
            transition ease-in-out delay-400  bg-cyan-500 hover:-translate-y-2 hover:scale-200 hover:bg-sky-400 duration-500'>
                Registrarse
            </button>
        </form>
    </div>
  )
}
export default RegisterPage