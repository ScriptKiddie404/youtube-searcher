import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {

        return <div>Cargando...</div>;
    } else {
        //Defino los datos para el panel:
        const description = video.snippet.description;
        const title = video.snippet.title;
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

        return (
            <div className={"ui segment"}>
                <div className={"ui embed"}>
                    <iframe title={"Video player"} src={videoSrc}/>
                </div>
                <h4 className={"ui header"}>{title}</h4>
                <p>{description}</p>
            </div>
        );
    }
}

export default VideoDetail;
