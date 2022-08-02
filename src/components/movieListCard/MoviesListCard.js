import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import css from './moviesListCard.module.css';
import {movieActions} from "../../redux";
import {backgroundURL, noImageURL, posterURL} from "../../constants";
import {GenreBadge} from "../genreBadge/GenreBadge";
import StarsRating from "../starsRating/StarsRating";

const MoviesListCard = ({movieId}) => {

    const {oneMovie} = useSelector(state => state.movie);
    const [image, setImage] = useState(noImageURL);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(movieActions.getOne({id: movieId.slice(1)}));
        },
        [dispatch, movieId]);

    useEffect(()=>{
        if(oneMovie){
            setImage(oneMovie.backdrop_path ? backgroundURL + oneMovie.backdrop_path :
                (oneMovie.poster_path ? oneMovie.poster_path : noImageURL));
        }
    }, [oneMovie])

    return (
        <div>
            {oneMovie &&
                <div>
                    <div className={css.movieInfoImage}>
                        <img src={image} alt=""/>
                    </div>

                    <div className={css.movieInfoBlock}>
                        <div>
                            <h2>{oneMovie.title.toUpperCase()} </h2>
                            {oneMovie.genres.map(genre => <GenreBadge key={genre.id} genreName={genre.name}/>)}
                        </div>

                        <p>{oneMovie.overview}</p>

                        <div>
                            <div>
                                Vote average: {oneMovie.vote_average} <br/>
                                Vote count: {oneMovie.vote_count}
                                <StarsRating size={20} allowHover={true} movieRating={oneMovie.vote_average}
                                             vote={true}/>
                            </div>

                            <div className={css.companyImagesBlock}>{
                                oneMovie.production_companies.map(company => {
                                    const image = posterURL + company.logo_path;
                                    return (company.logo_path && <img src={image} alt="" key={company.id}/>);
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};

export {
    MoviesListCard
};