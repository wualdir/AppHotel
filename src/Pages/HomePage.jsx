import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHotelThunk } from '../Slices/products.slice'
import HotelCard from '../components/HomePage/HotelCard'
import './Styles/HomePage.css'
import FilterName from '../components/HomePage/FilterName'
import { useState } from 'react'
import FilerCity from '../components/HomePage/FilerCity'
import FilterPrice from '../components/HomePage/FilterPrice'

const HomePage = () => {
  
  const [nameSearched, setnameSearched] = useState('')
  const [fromTo, setfromTo] = useState({
    from:0,
    to:Infinity
  })
 const products= useSelector(states =>states.products)

 const dispatch= useDispatch()
 useEffect(() => {
    const url='https://hotels-api.academlo.tech/hotels'
   dispatch(getHotelThunk(url))
 
 }, [])
 
 const cobFilter = (hotel)=>{
const filterName=hotel?.name.toLowerCase().includes(nameSearched)
const price=Number(hotel?.price)
const filterByPrice=price>=fromTo.from && price<=fromTo.to
return filterName && filterByPrice
 }
 
    return (
      <>
      <article className='HomePage__SearchName'>
      <FilterName
      setnameSearched={setnameSearched}
      />
     </article>
    <section className='HomePage'>
   
      <article className='HomePage__FilterContainer'>
        <h3 className='HomePage__FilterContainer__title'>Filters</h3>
        <FilterPrice 
        setfromTo={setfromTo}
        />
        <FilerCity
        setfromTo={setfromTo}
        setnameSearched={setnameSearched}
        />
      </article>
       
       <article className='HomePage__ContainCards'>
         {
         products?.filter(cobFilter).map(hotel=>(
                    <HotelCard
                    key={hotel.id}
                    hotel={hotel}
                    />
                ))
            }
       </article>
       
    </section>
    </>
  )
}

export default HomePage