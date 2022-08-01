import {noImageURL, posterURL} from "../../constants";

const PosterPreview = ({posterImage}) => {

    return (
        <img src={posterImage ? (posterURL + posterImage) : noImageURL} alt="poster"/>
    );
};

export {
    PosterPreview
};