import "./CardItem.css";
import { useDispatch } from "react-redux";
import { toggleLike, toggleDislike, toggleFavorite } from "../../../store/slices/moviesSlice";

const CardItem = ({ data }) => {
    const dispatch = useDispatch();

    const handleLike = () => {
        dispatch(toggleLike(data.id));
    };

    const handleDislike = () => {
        dispatch(toggleDislike(data.id));
    };

    const handleFavorite = () => {
        dispatch(toggleFavorite(data.id));
    };

    return (
        <li className="card__item">
            <header className="card__header">
                <figure className="card__header-thumbnail">
                    <img className="card__header-thumbnail-img" src={data.thumbnail} alt="Thumbnail" />
                </figure>
                <div className="card__control">
                    <span 
                        className={`card__like ${data.isLiked ? 'active' : ''}`} 
                        onClick={handleLike}
                    >
                        <i className="fi fi-rr-social-network"></i>
                    </span>
                    <span 
                        className={`card__dislike ${data.isDisliked ? 'active' : ''}`} 
                        onClick={handleDislike}
                    >
                        <i className="fi fi-rr-hand"></i>
                    </span>
                    <span 
                        className={`card__favorite ${data.isFavorite ? 'active' : ''}`} 
                        onClick={handleFavorite}
                    >
                        <i className="fi fi-rr-star"></i>
                    </span>
                </div>
            </header>
            <main className="card__main">
                <h1 className="card__main-title">{data.title}</h1>
                <p className="card__main-description">{data.description}</p>
            </main>
        </li>
    );
}

export default CardItem;
