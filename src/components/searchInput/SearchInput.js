import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

import css from './searchInput.module.css';
import {movieActions} from "../../redux";

const SearchInput = () => {

    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const change = e => {
        setInputValue(e.target.value);
    };

    const search = () => {
        if (inputValue) {
            dispatch(movieActions.searchName(inputValue));
            navigate('/movieSearch' + inputValue);
            setInputValue('');
        }
    };

    const keyPress = e => {
        if (e.code === 'Enter') {
            search();
        }
    }

    return (
        <div className={css.searchBlock}>
            <input type="text" onKeyPress={keyPress} value={inputValue} onChange={change}/>
            <button onClick={search}>
                <img src="https://cdn-icons-png.flaticon.com/512/751/751463.png" alt=""/>
            </button>
        </div>
    );
};

export {
    SearchInput
};