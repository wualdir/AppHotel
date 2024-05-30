
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import HotelIdPage from './Pages/HotelIdPage'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import GeneralHeader from './components/Shared/GeneralHeader'
import ReservationPage from './Pages/ReservationPage'
import ProtectedRouts from './Pages/ProtectedRouts'

function App() {
  

  return (
    <div>
      <GeneralHeader/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/hotel/:id' element={<HotelIdPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>

        <Route element={<ProtectedRouts/>}>
        <Route path='/reservation' element={<ReservationPage/>}/>

        </Route>
      
      </Routes>
    </div>
  )
}

export default App
