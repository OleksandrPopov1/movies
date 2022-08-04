import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import css from './moviesListCard.module.css';
import {movieActions} from "../../redux";
import {backgroundURL, noImageURL, posterURL} from "../../constants";
import {GenreBadge} from "../genreBadge/GenreBadge";
import StarsRating from "../starsRating/StarsRating";
import {SliderCustom} from "../sliderCustom/SliderCustom";
import {MovieTrailer} from "../movieTrailer/MovieTrailer";

const MoviesListCard = () => {

    const {oneMovie} = useSelector(state => state.movie);

    const {movieId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getOne({id: movieId}));
    }, [dispatch, movieId]);

    return (
        <div>
            {oneMovie &&
                <div>
                    <div className={css.movieInfoImage}>
                        <img src={oneMovie.backdrop_path ? backgroundURL + oneMovie.backdrop_path :
                            (oneMovie.poster_path ? oneMovie.poster_path : noImageURL)} alt=""/>
                    </div>

                    <div className={css.movieInfoBlock}>
                        <div>
                            <h2>{oneMovie.title.toUpperCase()}</h2>
                            {oneMovie.genres.map(genre => <GenreBadge key={genre.id} genreName={genre.name}/>)}
                        </div>

                        <p>{oneMovie.overview}</p>

                        <div>
                            <div>
                                Vote average: {oneMovie.vote_average} <br/>
                                Vote count: {oneMovie.vote_count}

                                <StarsRating movieRating={oneMovie.vote_average}
                                             size={20}
                                             allowHover={true}
                                             vote={true}
                                />
                            </div>

                            <div className={css.companyImagesBlock}>{
                                oneMovie.production_companies.map(company => {
                                    const image = posterURL + company.logo_path;
                                    return (company.logo_path && <img src={image} alt="" key={company.id}/>);
                                })}
                            </div>

                        </div>
                        <MovieTrailer movieId={oneMovie.id}/>
                        <SliderCustom movieId={movieId}/>
                    </div>

                </div>
            }
        </div>
    );
};

export {
    MoviesListCard
};