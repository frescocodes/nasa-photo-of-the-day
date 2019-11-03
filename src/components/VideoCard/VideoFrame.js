import React from "react";


const VideoFrame = props => {
    return (
        <div className="card">
            <div className="title">
                <h2 className="image-name">{props.title}</h2>
                <h3 className="date">{props.date}</h3>
            </div>

            <iframe src={props.img} height="400" width="600" title={props.title}></iframe>
            
            <div className="text-wrapper">
                <p className="copyright">{props.copyright}</p>
                <p className="explanation">{props.explanation}</p>
            </div>

        </div>
    )
}

export default VideoFrame;