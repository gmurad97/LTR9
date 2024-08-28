import "./CardList.css";
import CardItem from "./CardItem/CardItem.jsx";
import { useEffect } from "react";
import FakeApi from "../../services/api/FakeApi.js";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../store/slices/moviesSlice.js";

const CardList = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.movies.movies);

    useEffect(() => {
        FakeApi.getMovies().then(movies => dispatch(setMovies(movies)));
    }, [dispatch]);

    return (
        <ul className="card__list">
            {list.map((movie) => (
                <CardItem
                    data={movie}
                    key={movie.id}
                />
            ))}
        </ul>
    );
}

export default CardList;
