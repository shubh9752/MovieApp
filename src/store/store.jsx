import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './reducers/moviesSlice'
import tvReducer from './reducers/tvSlice'
import personReducer from './reducers/personSlice'
export const store = configureStore({
  reducer: {
    movies:moviesReducer,
    tv:tvReducer,
    person:personReducer
  },
})