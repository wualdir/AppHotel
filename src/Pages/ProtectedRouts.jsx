import { Navigate, Outlet } from "react-router-dom"

const ProtectedRouts = () => {
  if (localStorage.getItem('token')) {
    return <Outlet/>
  }
  else{
return <Navigate to='/login' />
  }
}

export default ProtectedRouts