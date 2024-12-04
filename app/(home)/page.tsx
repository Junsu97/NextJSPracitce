export const metadata = {
    title : "Home"
}
const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

// function : Movie 데이터 fetch 함수
async function getMovies(){
    console.log('getMovies');
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

// getMovies 에 await 키워드를 사용하기 위해 HomePage 에 async 키워드를 붙임
export default async function HomePage() {
    const movies = await getMovies();
    return (
      <div>
          {JSON.stringify(movies)}
      </div>
    );
}