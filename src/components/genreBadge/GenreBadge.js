import {Badge} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

const GenreBadge = ({genreName}) => {

    return (
        <Badge bg="info">
            {genreName}
        </Badge>
    );
};

export {
    GenreBadge
};