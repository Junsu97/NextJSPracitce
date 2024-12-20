import Link from "next/link";
import {MOVIE_API_URL} from "../../api/requestUrl/constants";
import Movie from "../../components/movie";
import styles from '../../styles/home.module.css';
export const metadata = {
    title: "Home"
}


// function : Movie 데이터 fetch 함수
async function getMovies() {
    console.log('getMovies');
    const response = await fetch(MOVIE_API_URL);
    const json = await response.json();
    return json;
}

// getMovies 에 await 키워드를 사용하기 위해 HomePage 에 async 키워드를 붙임
export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map(movie => (
                    <Movie key={movie.id} title={movie.title} id={movie.id} poster_path={movie.poster_path}></Movie>
                )
            )}
        </div>
    );
}