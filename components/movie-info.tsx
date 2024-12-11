import {MOVIE_API_URL} from "../api/requestUrl/constants";
import styles from'../styles/movie-info.module.css';
export const getMovie = async (id: string) => {

    const url = `${MOVIE_API_URL}/${id}`;
    const response = await fetch(url);
    return response.json();
}

export default async function MovieInfo({id}:{id:string}){
    const movie = await getMovie(id);
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={movie.poster_path} alt={movie.title}/>
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <h3>Production Company</h3>
                <ul>
                    {movie.production_companies.map((company) => (
                        <li key={company.id}>
                            {( company.logo_path && !company.logo_path.includes('null')) && <img src={company.logo_path} alt={company.name} style={{background:'white', width: '50px', height: '50px'}} /> }
                            <div>
                                <p><strong>{company.name}</strong></p>
                                <p>Country : {company.origin_country}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
            </div>
        </div>
    );
}
