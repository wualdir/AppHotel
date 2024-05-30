import { useEffect } from 'react'
import UseFecth from '../../Hooks/UseFecth'
import { getHotelThunk } from '../../Slices/products.slice'
import { useDispatch } from 'react-redux'
import './Styles/FilterCity.css'

const FilerCity = ({setfromTo,setnameSearched}) => {
  
  const [ cities,getCities]=UseFecth()
  useEffect(() => {
    const url='https://hotels-api.academlo.tech/cities'
    getCities(url)
  }, [])
  const dispach=useDispatch()
  const handleFilterCity = (cityId)=>{
    const url = `https://hotels-api.academlo.tech/hotels${cityId ? `?cityId=${cityId}` : ''}`
    dispach(getHotelThunk(url))
    setfromTo({
      from:0,
      to:Infinity
    })
    setnameSearched('')
  }
    return (
    <article className='FilterCity'>
        <h4 className='FilterCity__title'>Cities</h4>
        <ul className='FilterCity__listaCity'>
            <li  className='FilterCity__listaCity__value' onClick={()=>handleFilterCity()}>All cities</li>
            {
            cities?.map(city=>(
                <li className='FilterCity__listaCity__value' onClick={()=>handleFilterCity(city.id)} key={city.id}>{city.name}</li>
                ))
            }
        </ul>
    </article>
  )
}

export default FilerCity