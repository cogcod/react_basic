import React, {useEffect, useState} from 'react';

function MovieApp() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])

    const getMovies = async() => {
        const json = await (await fetch(
            "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
        )).json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(()=> {
        getMovies();
    },[])

    console.log(movies)

    return (
        <div>
            {loading ? <h1>Loading...</h1> : null}
            <ul>
                {
                    movies.map((item) =>
                        <li key={item.id}>{item.id}</li>
                    )
                }
            </ul>
        </div>
    );
}

export default MovieApp;