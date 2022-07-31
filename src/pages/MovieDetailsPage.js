import {MoviesListCard} from "../components";
import {useParams} from "react-router-dom";

const MovieDetailsPage = () => {

    const {movieId} = useParams();

    return (
        <div>
            <MoviesListCard movieId={movieId}/>
        </div>
    );
};

export {
    MovieDetailsPage
};