import './PosterPreview.css'

export default function PosterPreview({url}) {
    return (
        <div className={"movie-img"}>
            <img src={'https://image.tmdb.org/t/p/original' + url} alt={"test"}/>
        </div>
    )
}