import React from 'react'
import { useForm } from 'react-hook-form'
import UseCrud from '../../Hooks/UseCrud'

const FormRatin = ({bookSelected,setbookSelected}) => {
    const {register,handleSubmit,reset}= useForm()
    
    const [,,createReview]=UseCrud()

    const submit = (data)=>{
        const url='https://hotels-api.academlo.tech/reviews'
        const bodyData={
            ...data,
            hotelId:bookSelected.hotelId
        }
        createReview(url,bodyData,true)

        reset({
            rating:'5',
            comment:''
        })
        setbookSelected()
  }
    return (
    <div>
        <article>
        <h3>book</h3>
        <section>
            <img  src={bookSelected?.hotel.images[0].url}/>
            <h4>{bookSelected?.hotel.name}</h4>
        </section>
        <form onSubmit={handleSubmit(submit)}>
            <label>
                <span>Rating</span>
                <select {...register('rating')} >
                    <option value="5">🌟🌟🌟🌟🌟</option>
                    <option value="4">🌟🌟🌟🌟</option>
                    <option value="3">🌟🌟🌟</option>
                    <option value="2">🌟🌟</option>
                    <option value="1">🌟</option>
                </select>
            </label>
            <label>
                <span>coments</span>
                <textarea { ...register('comment')} />
            </label>
            <button>submit</button>
        </form>
        </article>
    </div>
  )
}

export default FormRatin