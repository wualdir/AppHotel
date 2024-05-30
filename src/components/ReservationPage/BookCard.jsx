import React from 'react'
import './Styles/BookCard.css'

const BookCard = ({book,deleteReservation,setbookSelected}) => {
  
const initalDate= (new Date(book.checkIn)).getTime()
const finalDate= (new Date(book.checkOut)).getTime()
const reservationDays=(finalDate-initalDate)/(1000*60*60*24)

const handleDelete = ()=>{
  const url=`https://hotels-api.academlo.tech/bookings/${book.id}`
  deleteReservation(url,book.id ,true)
}

const handleRate=()=>{
  setbookSelected(book)
}
  return (
    <section className='ReservationBook'>
      <header className='ReservationBook__headerImg'>
        <img className='ReservationBook__headerImg__img' src={book.hotel.images[0].url} alt="" />
      </header>
    
    <div className='ReservationBook__info'>
      <h3 className='ReservationBook__name'>{book.hotel.name}</h3>
      <div className='ReservationBook__infocity'>{book.hotel.city.name}, {book.hotel.city.country}</div>
      <p className='ReservationBook__comment' onClick={handleRate}>Rate and comment this visit... ¡CLICK HERE!</p>
     
    </div>
    
      <ul className='ReservationBook__list'>
        <li className='ReservationBook__label'><span className='ReservationBokk__Item'>Reservations Days</span><span className='ReservationBook__Value'>{reservationDays}</span></li>
        <li className='ReservationBook__label'><span className='ReservationBokk__Item'>subtotal Price</span><span className='ReservationBook__Value'>$ {reservationDays * Number(book.hotel.price)}</span></li>
      </ul>
    

      
      <button className='ReservationBook__button' onClick={handleDelete}><i className='bx bx-trash'></i></button>
    </section>
  )
}

export default BookCard