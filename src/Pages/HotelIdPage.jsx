import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import UseFecth from '../Hooks/UseFecth'
import OtherHotels from '../components/HotelIdPage/OtherHotels'
import MapHotel from '../components/HotelIdPage/MapHotel'
import FormReservation from '../components/HotelIdPage/FormReservation'
import './Styles/HotelIdPage.css'
import SliderImgs from '../components/HotelIdPage/SliderImgs'

const HotelIdPage = () => {
  
  const {id}= useParams()

  const [hotel,getHotel]= UseFecth()

  useEffect(() => {
    const url=`https://hotels-api.academlo.tech/hotels/${id}`
    getHotel(url)
  }, [id])

    
  return (
    <>
    <section  className='ContainerInfo'>
       
        <h2 className='ContainerInfo__name'>{hotel?.name}</h2>
       
        <article className='ContainerInfo__Califi2' >
        <div className='ContainerInfo__calificacion'>
        <i className='bx bxs-star'></i>
        <i className='bx bxs-star'></i>
        <i className='bx bxs-star'></i>
        <i className='bx bxs-star'></i>
        <i className='bx bxs-star'></i>
        </div>
        <div className="ContainerInfo__rating">
        <span >{hotel?.rating}</span>
        </div>
        </article>

        <article>
           <SliderImgs hotel={hotel}/>
        </article>
        
        <article className='ContainerInfo__Mapa'> 
        {hotel &&(
                <MapHotel 
                lat={hotel?.lat}
                lan={hotel?.lon}
                />)}
        </article>
       
        <article className='ContainerInfo__description'>
           <p className='ContainerInfo__description__country'>{hotel?.city.name},{hotel?.city.country}</p> 
            <div className='ContainerInfo__description__info'>
            <i className='bx bx-map'></i>
            <span>{hotel?.address}</span>
            </div>
        </article>
       
        <p className='ContainerInfo__detalle'>{hotel?.description}</p>
        
        <article>
          {
            localStorage.getItem('token')
            ?(
              <FormReservation
              hotelId={id}
              />
            ):<p className='ContainerInfo__reservLogin'>if you want to book,please <Link style={{ textDecoration: 'none',color:'red',fontWeight:'bold',padding:'0.4rem' }} to='/login'>Login</Link></p>
          }
        </article>

       
    </section >    
    <article>
      <OtherHotels
      city={hotel?.city}
      id={id}
      />
 </article>
</>
  )
}

export default HotelIdPage