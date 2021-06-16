import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {fetchMovies, fetchMovieSearch} from "../../redux";
import MovieListCard from "../movie-list-card/MovieListCard";
import MoviePage from "../movie-page/MoviePage";
import './MoviesList.css'

export default function MoviesList() {

    const nameButton = ["next", "back", "first", "last"]
    let [page, setPage] = useState(1);
    let [text, setText] = useState("");

    const dispatch = useDispatch()
    const {movies} = useSelector(({movies}) => (movies))

    useEffect(() => {
        if (text === "") {
            dispatch(fetchMovies(page))
        } else {
            dispatch(fetchMovieSearch(page, text))
        }
    }, [dispatch, page, text])

    const next = () => {
        page < movies.total_pages ? setPage(page + 1) : setPage(movies.total_pages)
    }

    const back = () => {
        page > 1 ? setPage(page - 1) : setPage(1)
    }

    const first = () => {
        setPage(1)
    }

    const last = () => {
        setPage(movies.total_pages)
    }

    return (
        <div className={"movie-list-box"}>
            <div className={"search"}>
                <form>
                    <input placeholder={"Search"} onChange={(event => setText(event.target.value))}/>
                </form>
            </div>
            <div className={'movie-list-wrapper'}>
                {
                    movies.results && movies.results.map((value) => {
                        return (<MovieListCard
                            key={value.id}
                            movie={value}
                        />)
                    })

                }
            </div>
            <div>
                <MoviePage
                    buttonClickNext={next}
                    buttonClickBack={back}
                    buttonClickFirst={first}
                    buttonClickLast={last}
                    nameButton={nameButton[0]}
                    page={page}
                />
            </div>
        </div>
    )
}