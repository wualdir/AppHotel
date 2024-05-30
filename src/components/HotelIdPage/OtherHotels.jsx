import { useEffect } from "react"
import UseFecth from "../../Hooks/UseFecth"
import HotelCard from "../HomePage/HotelCard"
import './Styles/OtherHotel.css'


const OtherHotels = ({city,id}) => {
 
    const [hotelsByCity,gethotelsByCity]=UseFecth()

    useEffect(() => {
        if (city) {
            
            const url = `https://hotels-api.academlo.tech/hotels?cityId=${city?.id}`
            gethotelsByCity(url)
        }
    }, [city])
    
    return (
     <section className="OtherHotel">
      <h3 className="OtherHotel__city">Other hotels in : <span className="OtherHotel__nameCity">{city?.country}</span></h3>
      <div className="OtherHotel__ContainerCard">
        {
            hotelsByCity?.filter(hotel=>hotel.id!==Number(id)).map(hotel=>(
                <HotelCard
                key={hotel.id}
                hotel={hotel}
                />       
            ))
        }
      </div>
    </section>
  )
}

export default OtherHotels