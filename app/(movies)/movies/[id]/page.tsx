import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import {Suspense} from "react";
import MovieDetailLoading from "./loading";

type ParamProps = {
    params: {
        id: string;
    };
    searchParams: {
        [key: string]: string;
    };
};


export default async function MovieDetail({params, searchParams}: ParamProps) {
    const {id} = await params;
    // const movie = await getMovie(id);
    // const videos = await getVideos(id);
    return (
        <div>
            <h3>Movie Detail Page</h3>
            <Suspense fallback={<MovieDetailLoading type={'info'}/>}>
                <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<MovieDetailLoading type={'movie'}/>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    );
}
