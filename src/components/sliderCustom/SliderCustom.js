import Carousel from 'react-bootstrap/Carousel';
import {useEffect, useState} from "react";

import './sliderCustom.css';
import {moviesService} from "../../services";
import {MovieInfo} from "../movieInfo/MovieInfo";

const SliderCustom = ({movieId}) => {

    const [recommendMovies, setRecommendMovies] = useState([]);

    useEffect(()=>{
        moviesService.getRecommendationsFilms(movieId).then(({data})=> setRecommendMovies(data.results));
    }, [movieId])

    return (
        <div className={'carouselBlock'}>
            <p>Recommend Movie</p>

            <Carousel>
            {recommendMovies.map(movie => {
                return <Carousel.Item key={movie.id}>
                    <MovieInfo key={movie.id} movie={movie}/>
                </Carousel.Item>
            })}
        </Carousel></div>
    );
};

export {
    SliderCustom
};