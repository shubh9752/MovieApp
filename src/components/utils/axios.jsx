import axios from "axios";

const instance=axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDJhMTkwOTljZjE5ZTQ0ODYwM2RkYmVlMTE1MmNkNSIsInN1YiI6IjY1ZTRhZWY5MWFkOTNiMDE2MzA2NzcxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kCAYtZETozOQFNjOYMUIJzMV8YUj03SligljJHlBHZA'
      }
})

export default instance