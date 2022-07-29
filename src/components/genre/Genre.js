const Genre = ({genre}) => {

    const filter = () => {

    };

    return (
        <div onClick={filter}>
            {genre.name}
        </div>
    );
};

export {
    Genre
};