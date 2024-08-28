import "./Navbar.css";
import LogoPng from "./assets/img/logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
    const likedMoviesCount = useSelector(state => state.movies.likedMovies);
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
                        <span className="menu__value">{favorites.length}</span>
                    </li>
                    <li className="menu__item">
                        <span className="menu__name">Liked Movies</span>
                        <span className="menu__value">{likedMoviesCount}</span>
                    </li>
                </ul>
            </div>
            <div className="basket">
                <span className="basket__value">{favorites.length}</span>
                <i className="fi fi-sr-shopping-basket"></i>
                <div className="basket__dropdown">
                    <ul className="basket__list">
                        {favorites.map((item, index) => (
                            <li className="basket__item" key={item.id}>
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
                                        {item.description.slice(0, 16)}...
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
