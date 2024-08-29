import { useSelector } from "react-redux";
import "./Navbar.css";
import LogoPng from "./assets/img/logo.png";

const Navbar = () => {
    const movies = useSelector(state => state.movies.movies);
    const likedMoviesCount = useSelector(state => state.movies.likedMovies);
    const dislikedMoviesCount = useSelector(state => state.movies.dislikedMovies);
    const favorites = useSelector(state => state.movies.favorites);

    return (
        <nav className="navbar">
            <figure className="logo">
                <img className="logo__img" src={LogoPng} alt="Logo" />
            </figure>
            <div className="menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <span className="menu__name">Total Movies</span>
                        <span className="menu__value">{movies.length}</span>
                    </li>
                    <li className="menu__item">
                        <span className="menu__name">Favorite Count</span>
                        <span className="menu__value">{favorites.length}</span>
                    </li>
                    <li className="menu__item">
                        <span className="menu__name">Liked Count</span>
                        <span className="menu__value">{likedMoviesCount}</span>
                    </li>
                    <li className="menu__item">
                        <span className="menu__name">Disliked Count</span>
                        <span className="menu__value">{dislikedMoviesCount}</span>
                    </li>
                </ul>
            </div>
            <div className="basket">
                <span className="basket__value">{favorites.length}</span>
                <i className="fi fi-sr-shopping-basket"></i>
                <div className="basket__dropdown">
                    {Array.isArray(favorites) && favorites.length > 0 ? (
                        <ul className="basket__list">
                            {favorites.map((item, index) => (
                                <li className="basket__item" key={index}>
                                    <div className="basket__item-thumbnail">
                                        <img
                                            className="basket__item-thumbnail-img"
                                            src={item.thumbnail}
                                            alt={item.title}
                                        />
                                    </div>
                                    <div className="basket__item-info">
                                        <h1 className="basket__item-title">{item.title}</h1>
                                        <p className="basket__item-description">
                                            {item.description.length > 48 ? `${item.description.slice(0, 48)}...` : item.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <span className="basket__empty">
                            The basket is empty...
                        </span>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
