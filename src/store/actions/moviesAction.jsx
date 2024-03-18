import axios from "../../components/utils/axios";
import { loadmovies } from "../reducers/moviesSlice";
export {removemovies} from "../reducers/moviesSlice";

export const asyncloadmovies=(id) =>async(dispatch,getState)=>{
    try {
        const detail=await axios.get(`/movie/${id}`)
        const externalid=await axios.get(`/movie/${id}/external_ids`);
        const recommendations=await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos=await axios.get(`/movie/${id}/videos`);
        const watchProviders=await axios.get(`/movie/${id}/watch/providers`);

        let theultimatedetails={
            detail:detail.data,
            externalid:externalid.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            videos:videos.data.results.find(m=>m.type==="Trailer"),
            watchProviders:watchProviders.data.results.IN,
        }
        // console.log(theultimatedetails);
        dispatch(loadmovies(theultimatedetails))

    }catch(err){
        console.log(err)
    }
}