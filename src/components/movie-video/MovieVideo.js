import ReactPlayer from "react-player";

export default function MovieVideo({value}) {

    console.log(value)
    return (
        <div>
            {
                <ReactPlayer width={"100%"}
                             height={"380px"}
                             style={{
                                 margin: "0 auto",
                                 boxShadow: "20px 20px 90px 20px black",
                             }}
                             url={"https://www.youtube.com/watch?v=" + value.key}
                />
            }
        </div>
    )
}