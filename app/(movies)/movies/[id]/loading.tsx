interface MovieDetailsLoadingProps  {
    type: string;
}

export default function MovieDetailLoading({type} : MovieDetailsLoadingProps) {
    return (<h2>
            {type === 'info' ? 'Loading a movie detail...' : 'Loading a movie video...'}
        </h2>
    );
}