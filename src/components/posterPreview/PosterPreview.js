import {posterURL} from "../../constants";

const PosterPreview = ({posterImage}) => {

    const image = posterURL + posterImage;

    return (
        <img src={image} alt="poster"/>
    );
};

export {
    PosterPreview
};