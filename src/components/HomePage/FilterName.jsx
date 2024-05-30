import React from 'react'
import { useRef } from 'react'
import './Styles/FilterName.css'

const FilterName = ({setnameSearched}) => {
  
 const inputSearch=useRef()

 const handleSumbmit=(e)=>{
e.preventDefault()
setnameSearched(inputSearch.current.value.trim().toLowerCase())
 }
    return (
    <article className='FilterName'>
        <form className='FilterName__form' onSubmit={handleSumbmit}>
            <input className='FilterName__form__input' ref={inputSearch} type="text"  placeholder='Buscar hotel por Nombre'/>
            <button className='FilterName__form__button'>Search</button>
        </form>
    </article>
  )
}

export default FilterName