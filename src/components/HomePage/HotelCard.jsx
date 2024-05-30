import { useNavigate } from "react-router-dom"
import './Styles/HotelCard.css'


const HotelCard = ({hotel}) => {
  
 const navigate= useNavigate()

  const navigateHotelId=()=>{
    navigate(`/hotel/${hotel.id}`)
  }

    return (
    <section className="HotelCard">
      
      <header className="HotelCard__header">
        <img className="HotelCard__img" src={hotel.images[0].url} alt="" />
      </header>
      
      <article className="HotelCard__body">
        <h3 className="HotelCard__name">{hotel.name}</h3>
  
        <div>
        <i className='bx bxs-star'></i>
        <i className='bx bxs-star'></i>
        <i className='bx bxs-star'></i>
        <i className='bx bxs-star'></i>
        <i className='bx bxs-star'></i>
        <span className="HotelCard__rating">{hotel.rating}</span>
        </div>
        
        <div className="HotelCard__NameContry">{hotel.city.name}, {hotel.city.country}</div>
        <div className="HotelCard__price">{'$ '+ hotel.price}</div>
      </article>
    
      <footer className="HotelCard__footer">
        <button className="HotelCard__seeMore" onClick={navigateHotelId}>See more...</button>
      </footer>
    </section>
  )
}

export default HotelCard