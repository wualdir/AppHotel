import axios from "axios"
import { useState } from "react"
import { getConfingToken } from "../Services/getConfingToken"


const UseCrud = () => {
  const [response , setResponse ] = useState() 

//READ
  const getApi=(url,withToken)=>{
    axios.get(url,withToken ?getConfingToken():{})
    .then(res=> setResponse(res.data))

    .catch(err=>{

        console.log(err)
        if (err?.response.status===401 ||err?.response.status===403 ) {
            localStorage.removeItem('token')
            localStorage.removeItem('userLogged')
        }
  })
}
//CREATE
const posApi=(url,data,withToken)=>{
    axios.post(url,data,withToken ?getConfingToken():{})
    .then(res=> {
        console.log(res.data)
        setResponse(response ? [...response,res.data]:[res.data])
    }   
    )
    .catch(err=>console.log(err))
}
//DELETE
const deleteApi=(url,id,withToken)=>{
    axios.delete(url,withToken ?getConfingToken():{})
    .then(res=> {
        console.log(res.data)
        // const id=url.split('/').at(-1)
        setResponse(response.filter(e=>id!==e.id))
    }   
    )
    .catch(err=>console.log(err))
}
//UPDATE
const updateApi=()=>{

}

return [response,getApi,posApi,deleteApi]
}

export default UseCrud