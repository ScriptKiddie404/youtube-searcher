import React from "react";
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {

    //Obtengo la url del vídeo:
    const url = video.snippet.thumbnails.medium.url;
    //Obtengo el título del vídeo:
    const title = video.snippet.title;

    return (
        <div onClick={() => onVideoSelect(video)} className={"video-item item"}>
            <img alt={"Thumbnail of the video"} className={"ui image"} src={url}/>
            <div className={"content"}>
                <div className={"header"}>{title}</div>
            </div>
        </div>
    );
}


export default VideoItem;
