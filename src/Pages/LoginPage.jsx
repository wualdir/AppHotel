import React from 'react'
import { useForm } from 'react-hook-form'
import UseAuth from '../Hooks/UseAuth'
import './Styles/LoginPage.css'

const LoginPage = () => {
    const {register,handleSubmit,reset,formState:{errors}}= useForm()
    const {loginUser}=UseAuth()
   
    const Submit = data =>{
        loginUser(data)
        reset({
           
            email:'',
            password:''   
        })
      }
  return (

  <section className='LoginContainer'>
    <div className='ImagenLogin'>
      <img className='ImagenLogin__img' src="./Login.jpg" alt="" />
    </div>
    <h2 className='formLogin__title'>User</h2>
   <form className='formLogin' onSubmit={handleSubmit(Submit)}>
        <label className='formLogin__info--label'>
            <span className='formLogin__info--title'>Email</span>
            <input  className='formLogin__info--value' {...register('email',{
          required:'Campo Obligatorio *',
          pattern:{
            value:/^\S+@\S+$/i,
            message:'Ingrese correo valido'
          }
        })} type="email" />
        <h5 className='smsError'>{errors.email?.message}</h5>
          </label>
          <label className='formLogin__info--label'>
          <span className='formLogin__info--title'>Password</span>
          <input  className='formLogin__info--value'{...register('password',{
          required:'Campo Obligatorio *',     
        })} type="password"/>
          </label>
         <button className='formLogin__button'>Submit</button>
      </form>
      </section>

  )
}

export default LoginPage