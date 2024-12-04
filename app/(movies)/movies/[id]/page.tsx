type ParamProps = {
    params: {
        id: string;
    };
    searchParams: {
        [key: string]: string;
    };
};

export default async function MovieDetail({ params, searchParams }: ParamProps) {
    const {id} = await params; // 동기적으로 접근 가능
    const region = await searchParams; // 동기적으로 접근 가능
    console.log(id, region); // 서버 콘솔에 출력

    return <h1>Movie {id}</h1>;
}
