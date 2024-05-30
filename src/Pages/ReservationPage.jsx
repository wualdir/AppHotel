import React, { useEffect, useState } from 'react'
import UseCrud from '../Hooks/UseCrud'
import BookCard from '../components/ReservationPage/BookCard'
import FormRatin from '../components/ReservationPage/FormRatin'
import './Styles/ReservationPage.css'

const ReservationPage = () => {
const [bookSelected, setbookSelected] = useState()

 const [reservation,getReservation,,deleteReservation]=UseCrud()

 useEffect(() => {
    const url='https://hotels-api.academlo.tech/bookings'
  getReservation(url,true)
 }, [])
 
    return (
   <article>
        {/* <h2>Active Reservation</h2>
        <div>
            <FormRatin
            bookSelected={bookSelected}
            setbookSelected={setbookSelected}
            />
        </div> */}
         <div className='ReservationBookActive'>
        {
            reservation?.map(book=>(
                <BookCard
                key={book.id}
                book={book}
                deleteReservation={deleteReservation}
                setbookSelected={setbookSelected}
                />
            ))
        }
    </div>
   </article>
  )
}

export default ReservationPage