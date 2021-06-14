import PosterPreview from "../poster-preview/PosterPreview";
import MovieInfo from "../movie-info/MovieInfo";
import './MovieListCard.css'
import {Link} from "react-router-dom";

export default function MovieListCard({movie}) {
    return (
        <div className={"movie-list-card"}>
            <Link to={"/movies/" + movie.id} className={"movie-list-card-link"}>
                <PosterPreview
                    url={movie.poster_path}
                />
                <MovieInfo
                    item={movie}
                />
            </Link>
        </div>
    )
}