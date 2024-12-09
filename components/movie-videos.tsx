import {MOVIE_API_URL} from "../api/requestUrl/constants";

const getVideos = async (id: string) => {
    const url = `${MOVIE_API_URL}/${id}/videos`;
    const response = await fetch(url);
    return response.json();
    // await new Promise(resolve => setTimeout(resolve, 3000));
    // throw new Error('에러에러');1
}

export default async function MovieVideos({id}:{id:string}){
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>
}