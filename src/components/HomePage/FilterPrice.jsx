import React from 'react'
import { useForm } from 'react-hook-form'
import './Styles/Filterprice.css'

const FilterPrice = ({setfromTo}) => {
    const {register,handleSubmit,reset}= useForm()
    
    const submit= (data)=>{
        const from=Number(data.from)
        const to=Number(data.to)
        setfromTo({
            from:data.from ===''? 0 : from,
            to:data.to ==='' ? Infinity: to
        })
        reset({
            from:'',
            to:''
        })
    }
    return (
    <article className='filterPrice'>
      <h4 className='filterPrice__price'>Price</h4>
      <form className='filterPrice__form' onSubmit={handleSubmit(submit)}>
        <label className='filterPrice__form__label'>
          <span className='filterPrice__item'>From</span>
          <input  className='filterPrice__item__value' {...register('from')} type="number" />
        </label>
        <label className='filterPrice__form__label'>
          <span className='filterPrice__item'>To</span>
          <input className='filterPrice__item__value' {...register('to')} type="number" />
        </label>
        <button className='filterPrice__item__button'>Search</button>
      </form>
    </article>
  )
}

export default FilterPrice