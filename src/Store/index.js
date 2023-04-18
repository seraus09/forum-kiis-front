import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import registerReducer from './Auth/register/reducers'

export default configureStore({
  reducer: {
    registerReducer
    },
  middleware: [thunk, logger],
  devTools: true
})