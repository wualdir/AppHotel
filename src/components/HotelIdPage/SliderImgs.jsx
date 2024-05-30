import { useState } from 'react'
import './Styles/SliderImgs.css'
const SliderImgs = ({hotel}) => {
    const [imgSelect, setimgSelect] = useState(0)
  
const objectStyle={
    transform: `translateX(calc((-${imgSelect}/${hotel?.images.length})*100%))`,
    width:`${hotel?.images.length *100}%`
}

const handlePrevio=()=>{
    if (imgSelect -1 >=0) {
        
        setimgSelect(imgSelect-1)
        }
    }
  
    
const handleNext=()=>{
const  lenghtImg=hotel?.images.length -1
setimgSelect(state=>(state+1 <= lenghtImg)?state +1 : state)
}
  
    return (
    <div className='Slider'>
        <button onClick={handlePrevio} className='Slider__btn '>&gt;</button>
        <div className='Slider__interior'>
            <div style={objectStyle} className='Slider__movable'>
            {
            hotel?.images.map(imgInfo=>(
                <div  className='Slider__img__container' key={imgInfo.id}>
                <img  className='Slider__img' src={imgInfo.url} alt=""/>
                </div>
            ))
            }
            </div>
        </div>
        <button onClick={handleNext} className='Slider__btn  Slider__btn__next'>&lt;</button>
    </div>
  )
}

export default SliderImgs