import {MOVIE_API_URL} from "../../../../api/requestUrl/constants";

type ParamProps = {
    params: {
        id: string;
    };
    searchParams: {
        [key: string]: string;
    };
};

const getMovie = async (id: string) => {
    const url = `${MOVIE_API_URL}/${id}`;
    const response = await fetch(url);
    return response.json();
}

const getVideos = async (id: string) => {
    const url = `${MOVIE_API_URL}/${id}/videos`;
    const response = await fetch(url);
    return response.json();
}

export default async function MovieDetail({params, searchParams}: ParamProps) {
    const {id} = await params;
    // const movie = await getMovie(id);
    // const videos = await getVideos(id);
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    return (
        <h1>{movie.title}</h1>
    );
}
