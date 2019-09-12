import React from "react";

const PhotoCard = props => {
    return (
    <div className="card">
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        <img src={props.img}></img>
        <p>{props.copyright}</p>
        <p>{props.explanation}</p>

    </div>
    )
}

export default PhotoCard