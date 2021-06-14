import './MovieInfo.css'

export default function MovieInfo({item}) {
    return (
        <div>
            <div className={"movie-info-title"}>
            <span>{item.title}</span>
            </div>
        </div>
    )
}