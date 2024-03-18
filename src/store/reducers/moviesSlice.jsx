import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info:null
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    loadmovies:(state,actions)=>{
        state.info=actions.payload
    },
    removemovies:(state,actions)=>{
        state.info=null;
    }

  },
})

// Action creators are generated for each case reducer function
export const { loadmovies,removemovies } = moviesSlice.actions

export default moviesSlice.reducer