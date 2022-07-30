import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";

const Genre = ({genre, id}) => {

    const {movies} = useSelector(state => state.movie);
    const dispatch = useDispatch();

    const filter = () => {
        console.log(id)
        console.log(movies[0].genre_ids)
        const filterMovie = movies.filter(movie => movie.genre_ids.find(id))
        console.log(filterMovie)
        // dispatch(movieActions.filterByGenre({filterMovie: filterMovie}));
    };

    return (
        <div onClick={filter} className='titleGenreBlock'>
            {genre.name}
        </div>
    );
};

export {
    Genre
};