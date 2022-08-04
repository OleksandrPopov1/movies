import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {countryActions, movieActions} from "../../redux";
import Dropdown from "react-bootstrap/Dropdown";
import css from "../genres/genres.module.css";
import {useNavigate} from "react-router-dom";

const Countries = () => {

    const {countries} = useSelector(state => state.country);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(countryActions.getAll());
    }, [dispatch]);

    const chooseCountry = (country) => {
        dispatch(movieActions.setCountry(country));
        navigate('allMovie');
    };

    return (
        <Dropdown autoClose={true}>
            <Dropdown.Toggle variant="info" id="dropdown-basic" >
                Country
            </Dropdown.Toggle>

            <Dropdown.Menu className={css.genreMenu}>
                {countries.map(country =>{
                    return <Dropdown.Item
                        key={country.iso_3166_1}
                        onClick={() => chooseCountry(country.iso_3166_1)}>
                        {country.english_name}
                    </Dropdown.Item>
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export {
    Countries
};