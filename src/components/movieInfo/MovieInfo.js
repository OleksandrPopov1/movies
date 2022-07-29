import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {moviesService} from "../../services";

const MovieInfo = ({movieId}) => {

    // const {movies} = useSelector(state => state.movie);
    // console.log(movies)
    // const movieById = movies.find(movie => movie.id === movieId);

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        console.log(movieId.slice(1))
        moviesService.getOneById((movieId.slice(1))).then(({data}) => setMovie({...data}))
    }, []);

    return (
        <div>
            {movie &&
                <div>
                    {movie.title} <br/>
                    {movie.overview}
                </div>
            }
        </div>
    );
};

export {
    MovieInfo
};