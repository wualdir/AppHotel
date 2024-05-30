import { configureStore } from '@reduxjs/toolkit'
import products from '../Slices/products.slice'
export default configureStore({
  reducer:{
    products
  }
})

