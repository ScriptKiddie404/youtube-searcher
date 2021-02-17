import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {

    const renderedList = videos.map(video => {
        //PASAMOS EL ELEMENTO ACTUAL "video" como prop
        return <VideoItem
            video={video}
            key={video.id.videoId}
            onVideoSelect={onVideoSelect}/>;
    });

    //Recordar que el renderedList DEBE ESTAR ENTRE DIVS
    return <div className={"ui relaxed divided list"}>{renderedList}</div>;
}

export default VideoList;
