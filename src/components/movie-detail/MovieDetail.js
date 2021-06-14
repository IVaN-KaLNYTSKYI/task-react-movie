import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchMoviesId, fetchVideo} from "../../redux";
import MovieVideo from "../movie-video/MovieVideo";
import './MovieDetail.css'

export default function MovieDetail({id}) {
    const dispatch = useDispatch()
    const {movie, video} = useSelector(({movies}) => (movies))

    useEffect(() => {
        dispatch(fetchMoviesId(id))
        dispatch(fetchVideo(id))
    }, [dispatch, id])

    console.log(movie)
    return (
        <div className={"movie-detail-box"}>
            <div className={"movie-detail-info"}>
                {
                    movie && (
                        <div className={"movie-detail"} style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)),url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                            backgroundSize: "cover"
                        }}>
                            <div className={"movie-box-img"}>
                                <img className={"movie-detail-img"}
                                     src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
                                     alt={movie.id}/>
                            </div>
                            <div>
                                <div className={"movie-info-detail"}>
                                    <div className={"movie-detail-title-box"}>
                                        <span className={"movie-detail-title"}>{movie.original_title}</span>
                                        <span
                                            className={"movie-detail-release"}>({movie.release_date})
                                        </span>
                                    </div>
                                    <div className={"movie-detail-vote-box"}>
                                        <span>Vote Average:</span>
                                        <span className={"movie-detail-vote"}>{movie.vote_average}</span>
                                    </div>
                                    <div className={"movie-detail-genres-box"}>
                                        Genres:
                                        {movie.genres && movie.genres.map((value) => {
                                            return <span className={"movie-detail-genres"}
                                                         key={value.id}> {value.name}</span>
                                        })
                                        }
                                    </div>

                                    <div className={"movie-detail-lan"}>Original
                                        Language:<span>{movie.original_language}</span></div>
                                    <div className={"movie-detail-pop"}>Popularity:
                                        <span>{movie.popularity}</span>
                                    </div>
                                    <div className={"movie-detail-ove"}>Overview:
                                        <span>{movie.overview}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={"movie-detail-video-box"}>
                <div className={"movie-detail-video"}>
                    {
                        video.results && (
                            video.results.map((value, index) => {
                                if (index === 0) {
                                    return <MovieVideo
                                        key={value.id}
                                        value={value}
                                    />
                                }
                            })
                        )
                    }
                </div>
            </div>
        </div>
    )
}