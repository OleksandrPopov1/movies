import {MovieInfo} from "../components";
import {useParams} from "react-router-dom";

const MovieDetailsPage = () => {

    const {movieId} = useParams();

    return (
        <div>
            <MovieInfo movieId={movieId}/>
        </div>
    );
};

export {
    MovieDetailsPage
};