import React from 'react'
import { useForm } from 'react-hook-form'
import UseAuth from '../Hooks/UseAuth'
import './Styles/RegisterPage.css'

const RegisterPage = () => {
  const {handleSubmit, register,reset,formState:{errors}} = useForm()
  const {createUser }=UseAuth()

  const Submit = data =>{
    createUser(data)

    reset({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        gender:'male'
    })
  }

    return (
   <section className='divContainer'>
    <h2 className='formRegister__title'>Register</h2>
   <form className='formRegister' onSubmit={handleSubmit(Submit)}>
          <label className='formRegister__info--label'>
            <span className='formRegister__info--title' >First name</span>
            <input className='formRegister__info--value' {...register('firstName',{
           required:'Campo Obligatorio *',
           pattern:{
           value:/[^0-9]/,
           message:'Ingrese Nombre Valido'
           }
        }) } type="text" />
             <h5 className='RegisterError'>{errors.firstName?.message}</h5>
          </label>
          <label className='formRegister__info--label'>
            <span className='formRegister__info--title'>Last name</span>
            <input className='formRegister__info--value' {...register('lastName',{
           required:'Campo Obligatorio *',
           pattern:{
           value:/[^0-9]/,
           message:'Ingrese Nombre Valido'
           }
        })}  type="text" />
            <h5 className='RegisterError'>{errors.lastName?.message}</h5>
          </label>
          <label className='formRegister__info--label'>
            <span className='formRegister__info--title'>Email</span>
            <input className='formRegister__info--value' {...register('email',{
          required:'Campo Obligatorio *',
          pattern:{
            value:/^\S+@\S+$/i,
            message:'Ingrese correo valido'
          }
        })}  type="email" />
        <h5 className='RegisterError'>{errors.email?.message}</h5>
          </label>
          <label className='formRegister__info--label'>
            <span className='formRegister__info--title'>Password</span>
            <input className='formRegister__info--value' {...register('password',{
          required:'Campo Obligatorio *',
          minLength:{
          value:8,
          message:'La contraseña debe tener minimo 8 caracteres'
          }
        })} type="password" />
         <h5 className='RegisterError'>{errors.password?.message}</h5>
          </label>
          <label className='formRegister__info--label'>
            <span className='formRegister__info--title'>Gender</span>
            <select className='formRegister__info--value'{...register('gender')}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        <button className='formRegister__button'>Submit</button>
      </form>
      </section>
  )
}

export default RegisterPage