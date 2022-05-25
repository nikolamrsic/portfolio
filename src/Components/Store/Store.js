import { configureStore } from '@reduxjs/toolkit'
import ModalReducer from './ModalReducer'

const store = configureStore({
  reducer: {
    ModalReducer
  }
})

export default store