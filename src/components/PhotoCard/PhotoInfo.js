import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard.js";
import VideoFrame from "../VideoCard/VideoFrame.js"

export default function PhotoInfo() {
    const [ data , setData ] = useState('');
    const [ date, setDate ] = useState('2019-09-11');
    // 2019-09-08 = video
    // &date={date};
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=gskY9gWJDUCFSaNw236U0r17XpY0E3rXRo4Ca1ko&date=${date}`)
        .then(response => {
            console.log(response);
            const info = response.data;
            setData(info);
        })
        .catch(error => {
            console.log('broken =>"', error)
        })
    }, [])
    
    if (data.media_type === "image") {
        return (
            <PhotoCard 
            title={data.title}
            date={data.date}
            img={data.url}
            hdimg={data.hdurl}
            explanation={data.explanation}
            copyright={`Copyright: ${data.copyright}`}
            
            />
        )
    } else {
        return (
            <iframe src={data.url} height="720" width="1280"></iframe>
        )
    }

    // return (
    //     <PhotoCard 
    //     title={data.title}
    //     date={data.date}
    //     img={data.url}
    //     hdimg={data.hdurl}
    //     explanation={data.explanation}
    //     copyright={data.copyright}
    //     />
    // )
}