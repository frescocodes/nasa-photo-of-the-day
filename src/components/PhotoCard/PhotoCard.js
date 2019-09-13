import React from "react";
import styled from "styled-components";

const Card = styled.div`
    background: #262638;
    color: #fff;
    width: 700px;
    height: 900px;
    box-shadow: 0 8px 10px black;
    margin: 2% 5% 5% 5%;
    &:hover {
        box-shadow: 0 8px 20px black;
        transform: translateY(-10px) scale(1.10);
    }
`

const Photo = styled.img`
    width: 700px;
    height: 500px;
    object-fit: cover;

`

const PhotoCard = props => {
    
    return (
        <Card className="card">
            <Photo src={props.img} className="nasa-img" alt={props.alt}></Photo>
            <div className="text-wrapper"> 
                <h2 className="image-name">{props.title}</h2>
                <h3 className="date">{props.date}</h3>
                <p className="copyright">{props.copyright}</p>
                <p className="explanation">{props.explanation}</p>
            </div>

        </Card>
    )
    
}

export default PhotoCard