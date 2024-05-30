
import {Map, Marker} from 'pigeon-maps'
const MapHotel = ({lat, lan}) => {
  return (
    <Map center={[+lat,+lan]} width={( '100%'*100)/100} height={300}  >
        <Marker 
          width={50}
          anchor={[+lat,+lan]}
          color='blue'/> 
       
          
    </Map>

  )
}

export default MapHotel