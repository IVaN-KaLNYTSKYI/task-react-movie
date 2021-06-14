import './MoviePage.css'

export default function MoviePage({buttonClickNext, buttonClickBack, buttonClickFirst, buttonClickLast, page}) {
    return (
        <div className={"btn-box"}>
            <button className={"btn"} onClick={() => buttonClickFirst()} disabled={page === 1}>first</button>
            <button className={"btn"} onClick={() => buttonClickBack()} disabled={page === 1}>back</button>
            <span>Сторінка - {page}</span>
            <button className={"btn"} onClick={() => buttonClickNext()} disabled={page === 500}>next</button>
            <button className={"btn"} onClick={() => buttonClickLast()} disabled={page === 500}>lack</button>
        </div>
    )
}