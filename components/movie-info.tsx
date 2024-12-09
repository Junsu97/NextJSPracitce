import {MOVIE_API_URL} from "../api/requestUrl/constants";

const getMovie = async (id: string) => {
    const url = `${MOVIE_API_URL}/${id}`;
    const response = await fetch(url);
    return response.json();
}

export default async function MovieInfo({id}:{id:string}){
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>
}
