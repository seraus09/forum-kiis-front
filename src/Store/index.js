import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import registerReducer from './Auth/register/reducers'
import loginReducer from './Auth/login/reducers'
import postReducer from './Forum/mainPage/reducer'
import AddPostReducer from './Forum/mainPage/addPostReducer'

export default configureStore({
  reducer: {
    registerReducer,
    loginReducer,
    postReducer,
    AddPostReducer
    },
  middleware: [thunk, logger],
  devTools: true
})