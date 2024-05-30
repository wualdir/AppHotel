import {useForm} from 'react-hook-form'
import UseCrud from '../../Hooks/UseCrud';
import './Styles/FormReservation.css'

const FormReservation = ({hotelId}) => {
  
   const {register,reset,handleSubmit} = useForm()
   const [,,createBooking ]= UseCrud()
   
   const submit=data=>{
    const url='https://hotels-api.academlo.tech/bookings'
    const objData={
        ...data,
        hotelId
    }
    createBooking(url,objData,true)
    reset({
        chekIn:'',
        chekOut:''
    })
   }
    return (
    <form className='FormReservation' onSubmit={handleSubmit(submit)}>
        <h3>if you want to book,please give me your:  </h3>
        <label className='FormReservation__label'>
            <span>Chek in </span>
            <input  className='FormReservation__input' {...register('checkIn')} type="date" />
        </label>
        <label className='FormReservation__label'>
            <span>Chek out </span>
            <input className='FormReservation__input' {...register('checkOut')} type="date" />
        </label>
        <button className='FormReservation__button'>reserve a room </button>
    </form>
  )
}

export default FormReservation