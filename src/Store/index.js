import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import registerReducer from './Auth/register/reducers'
import loginReducer from './Auth/login/reducers'


export default configureStore({
  reducer: {
    registerReducer,
    loginReducer,
    },
  middleware: [thunk, logger],
  devTools: true
})