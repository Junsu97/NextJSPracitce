import MovieInfo, {getMovie} from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import {Suspense} from "react";
import MovieDetailLoading from "./loading";

type ParamProps = {
    params: Promise< {
        id: string;
    }>;
    searchParams: Promise<{
        [key: string]: string;
    }>;
};
export async function generateMetadata({params}: ParamProps) {
    const {id} = await params;
    const movie = await getMovie(id);
    return {
        title: movie.title
    };
}

export default async function MovieDetail({params, searchParams}: ParamProps) {
    const {id} = await params;
    // const movie = await getMovie(id);
    // const videos = await getVideos(id);
    return (
        <div>
            <Suspense fallback={<MovieDetailLoading type={'info'}/>}>
                <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<MovieDetailLoading type={'movie'}/>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    );
}
