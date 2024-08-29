import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../store/slices/moviesSlice.js";
import "./CardList.css";
import CardItem from "./CardItem/CardItem.jsx";
import FakeApi from "../../services/api/FakeApi.js";

const CardList = () => {
    const movies = useSelector(state => state.movies.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        FakeApi.getMovies().then(movies => dispatch(setMovies(movies)));
    }, [dispatch]);

    return (
        <ul className="card__list">
            {movies.map((movie) => (
                <CardItem
                    data={movie}
                    key={movie.id}
                />
            ))}
        </ul>
    );
}

export default CardList;
