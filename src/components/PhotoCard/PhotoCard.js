import React from "react";

const PhotoCard = props => {
    return (
    <div className="card">
        <div className="title">
            <h2 className="image-name">{props.title}</h2>
            <h3 className="date">{props.date}</h3>
        </div>
        <div className="image-wrapper">
            <img src={props.img} className="nasa-img"></img>
        </div>
        <div className="text-wrapper">
            <p className="copyright">{props.copyright}</p>
            <p className="explanation">{props.explanation}</p>
        </div>

    </div>
    )
}

export default PhotoCard